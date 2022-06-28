import { purchaseSuccessful } from './state/actions';
import { BEFORE_PURCHASE } from './state/constants';
import { contractStatus, info, log } from '../utils/broadcast';
import { getUUID, recoverFromError, doUntilDone } from '../utils/helpers';
import { log_types } from '../../../constants/messages';
import { observer as globalObserver } from '../../../utils/observer';
import ws from '../../api/ws';
import $scope from '../utils/cliTools';
import { subscribeToOpenContract } from './OpenContract';
import Store from './trade-engine-store';
import { clearProposals, renewProposalsOnPurchase } from './Proposal';
import { updateAndReturnTotalRuns } from './Total';

let delayIndex = 0;
let purchase_reference;

export default Engine =>
    class Purchase extends Engine {
        purchase(contract_type) {
            // Prevent calling purchase twice
            if (Store.getState().scope !== BEFORE_PURCHASE) {
                return Promise.resolve();
            }

            const { id, askPrice } = this.selectProposal(contract_type);

            const onSuccess = response => {
                // Don't unnecessarily send a forget request for a purchased contract.
                $scope.data.proposals = $scope.data.proposals.filter(p => p.id !== response.echo_req.buy);
                const { buy } = response;

                contractStatus({
                    id: 'contract.purchase_received',
                    data: buy.transaction_id,
                    buy,
                });

                subscribeToOpenContract(buy.contract_id);
                Store.dispatch(purchaseSuccessful());
                renewProposalsOnPurchase();
                delayIndex = 0;
                log(log_types.PURCHASE, { longcode: buy.longcode, transaction_id: buy.transaction_id });
                info({
                    accountID: $scope.account_info.loginid,
                    totalRuns: updateAndReturnTotalRuns(),
                    transaction_ids: { buy: buy.transaction_id },
                    contract_type,
                    buy_price: buy.buy_price,
                });
            };
            const action = () => ws.send({ buy: id, price: askPrice });
            $scope.contract_flags.is_sold = false;
            contractStatus({
                id: 'contract.purchase_sent',
                data: askPrice,
            });

            if (!$scope.options.timeMachineEnabled) {
                return doUntilDone(action).then(onSuccess);
            }
            return recoverFromError(
                action,
                (errorCode, makeDelay) => {
                    // if disconnected no need to resubscription (handled by live-api)
                    if (errorCode !== 'DisconnectError') {
                        renewProposalsOnPurchase();
                    } else {
                        clearProposals();
                    }

                    const unsubscribe = Store.subscribe(() => {
                        const { scope, proposalsReady } = Store.getState();
                        if (scope === BEFORE_PURCHASE && proposalsReady) {
                            makeDelay().then(() => globalObserver.emit('REVERT', 'before'));
                            unsubscribe();
                        }
                    });
                },
                ['PriceMoved', 'InvalidContractProposal'],
                delayIndex++
            ).then(onSuccess);
        }
        getPurchaseReference = () => purchase_reference;
        regeneratePurchaseReference = () => {
            purchase_reference = getUUID();
        };
    };
