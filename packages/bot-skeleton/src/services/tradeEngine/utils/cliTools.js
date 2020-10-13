import TicksService from '../../api/ticks_service';
import { generateLiveApiInstance } from '../../api/appId';
import Observer from '../../../utils/observer';

export const createScope = () => {
    const observer = new Observer();
    const api_type = 'binary1';
    const api = generateLiveApiInstance(api_type);
    api.api_type = api_type;
    const ticksService = new TicksService(api);

    return { observer, api, ticksService };
};
