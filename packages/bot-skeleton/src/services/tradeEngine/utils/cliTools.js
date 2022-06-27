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

    return {
        api,
        contract_id,
        contract_flags,
        balance,
        session,
        stopped,
        token,
        open_contract_id,
        options,
        symbol,
    };
};

const $scope = createScope();

export default $scope;
