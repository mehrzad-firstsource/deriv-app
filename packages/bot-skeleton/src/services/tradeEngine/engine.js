import { localize } from '@deriv/translations';
import { loginAndGetBalance } from './authenticate';
import { observeOpenContract } from './open-contract';
import { checkProposalReady, observeProposals, makeProposals } from './proposal';
import { watchTicks } from './ticks';
import { checkLimits, clearStatistics } from './total';
import Store, { constants, initial_scope, start, $scope, Services } from './state';
import { createError } from './utils';

/* The watchScope function is called randomly and resets the prevTick
 * which leads to the same problem we try to solve. So prevTick is isolated
 */
let prevTick;

const expectOptions = options => {
    const { symbol, contractTypes } = options;

    if (!symbol) {
        throw createError('OptionError', localize('Underlying market is not selected'));
    }

    if (!contractTypes[0]) {
        throw createError('OptionError', localize('Contract type is not selected'));
    }
};

export const expectInitArg = args => {
    const [token, options] = args;

    if (!token) {
        throw createError('LoginError', localize('Please login'));
    }

    expectOptions(options);

    return args;
};

const watchScope = ({ store, stopScope, passScope, passFlag }) => {
    // in case watch is called after stop is fired
    if (store.getState().single.scope === stopScope) {
        return Promise.resolve(false);
    }
    return new Promise(resolve => {
        const unsubscribe = store.subscribe(() => {
            const newState = store.getState().single;

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

export const initTradeEngine = (...args) => {
    const [token, options] = expectInitArg(args);
    const { symbol } = options;

    $scope.initArgs = args;
    $scope.options = options;
    $scope.startPromise = loginAndGetBalance(token);

    watchTicks(symbol);
};

export const sleep = (arg = 1) => {
    return new Promise(
        r =>
            setTimeout(() => {
                r();
                setTimeout(() => Services.observer.emit('CONTINUE'), 0);
            }, arg * 1000),
        () => {}
    );
};

export const startTradeEngine = tradeOptions => {
    if (!$scope.options) {
        throw createError('NotInitialized', localize('Bot.init is not called'));
    }

    Services.observer.emit('bot.running');

    $scope.tradeOptions = tradeOptions;
    Store.dispatch(start());
    checkLimits(tradeOptions);
    makeProposals({ ...$scope.options, ...tradeOptions });
    checkProposalReady();
};

export const stopTradeEngine = () => {
    $scope = initial_scope;
};

export const tradeEngineObserver = () => {
    Services.observer.register('statistics.clear', clearStatistics);
    observeOpenContract();
    observeProposals();
};

export const watch = watchName => {
    if (watchName === 'before') {
        return watchBefore(Store);
    }
    return watchDuring(Store);
};
