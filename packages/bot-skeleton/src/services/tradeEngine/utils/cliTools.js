import ws from '../../api/ws';

export const createScope = () => {
    const api = ws;
    const balance = 0;
    const contract_flags = {
        is_sold: false,
        is_sell_available: false,
        is_expired: false,
    };
    const session = {
        runs: 0,
        profit: 0,
    };
    const stopped = false;
    return { api, stopped, session, balance, contract_flags };
};

const $scope = createScope();

export default $scope;
