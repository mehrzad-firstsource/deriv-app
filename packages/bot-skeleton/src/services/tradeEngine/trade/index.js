import { localize } from '@deriv/translations';
import { observeOpenContract } from './OpenContract';
import { checkProposalReady, observeProposals, makeProposals } from './Proposal';
import { start } from './state/actions';
import * as constants from './state/constants';
import { watchTicks } from './Ticks';
import { checkLimits, clearStatistics } from './Total';
import { expectInitArg } from '../utils/sanitize';
import { createError } from '../../../utils/error';
import { observer as globalObserver } from '../../../utils/observer';
import $scope, { initial_scope } from '../utils/cliTools';
import Store from './trade-engine-store';
import { loginAndGetBalance } from './Authenticate';

const watchBefore = store =>
    watchScope({
        store,
        stopScope: constants.DURING_PURCHASE,
        passScope: constants.BEFORE_PURCHASE,
        passFlag: 'proposalsReady',
    });

const watchDuring = store =>
    watchScope({
        store,
        stopScope: constants.STOP,
        passScope: constants.DURING_PURCHASE,
        passFlag: 'openContract',
    });

export const watch = watchName => {
    if (watchName === 'before') {
        return watchBefore(Store);
    }
    return watchDuring(Store);
};

/* The watchScope function is called randomly and resets the prevTick
 * which leads to the same problem we try to solve. So prevTick is isolated
 */
let prevTick;
const watchScope = ({ store, stopScope, passScope, passFlag }) => {
    // in case watch is called after stop is fired
    if (store.getState().scope === stopScope) {
        return Promise.resolve(false);
    }
    return new Promise(resolve => {
        const unsubscribe = store.subscribe(() => {
            const newState = store.getState();

            if (newState.newTick === prevTick) return;
            prevTick = newState.newTick;

            if (newState.scope === passScope && newState[passFlag]) {
                unsubscribe();
                resolve(true);
            }

            if (newState.scope === stopScope) {
                unsubscribe();
                resolve(false);
            }
        });
    });
};

export const initTradeEngine = (...args) => {
    const [token, options] = expectInitArg(args);
    const { symbol } = options;

    $scope.initArgs = args;
    $scope.options = options;
    $scope.startPromise = loginAndGetBalance(token);

    watchTicks(symbol);
};

export const startTradeEngine = tradeOptions => {
    if (!$scope.options) {
        throw createError('NotInitialized', localize('Bot.init is not called'));
    }

    globalObserver.emit('bot.running');

    $scope.tradeOptions = tradeOptions;
    Store.dispatch(start());
    checkLimits(tradeOptions);
    makeProposals({ ...$scope.options, ...tradeOptions });
    checkProposalReady();
};

export const stopTradeEngine = () => {
    $scope = initial_scope;
};

export default class TradeEngine {
    constructor() {
        globalObserver.register('statistics.clear', clearStatistics);
        observeOpenContract();
        observeProposals();
    }
}
