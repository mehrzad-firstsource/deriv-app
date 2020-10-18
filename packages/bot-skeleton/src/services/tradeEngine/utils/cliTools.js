import TicksService from '../../api/ticks_service';
import TicksServiceDeriv from '../../api/ticks_service_deriv';
import { generateLiveApiInstance } from '../../api/appId';
import Observer from '../../../utils/observer';

export const createScope = async () => {
    const observer = new Observer();
    const api_type = 'binary';
    const api = await generateLiveApiInstance(api_type);
    api.api_type = api_type;
    if (api_type === 'binary') {
        const ticksService = new TicksService(api);
        return { observer, api, ticksService };
    } else {
        const ticksService = new TicksServiceDeriv(api);
        return { observer, api, ticksService };
    }
};
