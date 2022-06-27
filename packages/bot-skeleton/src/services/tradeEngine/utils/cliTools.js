import ws from '../../api/ws';

export const createScope = () => {
    const api = ws;
    const balance = 0;
    const contract_flags = {
        is_sold: false,
        is_sell_available: false,
        is_expired: false,
    };
    const contract_id = '';
    const session = {
        runs: 0,
        profit: 0,
    };
    const stopped = false;
    const symbol = '';
    const token = '';
    const open_contract_id = '';
    const options = {};
    const trade_option = {};
    const proposal_templates = [];

    return {
        api,
        contract_id,
        contract_flags,
        balance,
        open_contract_id,
        options,
        session,
        stopped,
        symbol,
        token,
        trade_option,
        proposal_templates,
    };
};

const $scope = createScope();

export default $scope;
