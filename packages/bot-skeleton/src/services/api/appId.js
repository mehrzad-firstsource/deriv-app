import { LiveApi } from 'binary-live-api';
import { getLanguage } from '@deriv/translations';
import AppIds from './appIdResolver';

const DerivAPIBasic = require('@deriv/deriv-api/dist/DerivAPIBasic');
const website_name = require('@deriv/shared').website_name;
const getSocketURL = require('@deriv/shared').getSocketURL;
const getAppId = require('@deriv/shared').getAppId;

const isRealAccount = () => {
    const active_loginid = localStorage.getItem('active_loginid') || '';
    const is_real = typeof active_loginid === 'string' && !active_loginid.startsWith('VRT');

    return is_real;
};

const getDomainAppId = () => AppIds[document.location.hostname.replace(/^www./, '')];

const getDefaultEndpoint = () => ({
    url: isRealAccount() ? 'green.binaryws.com' : 'blue.binaryws.com',
    appId: localStorage.getItem('config.default_app_id') || getDomainAppId() || 19111,
});

const getServerAddressFallback = () => getCustomEndpoint().url || getDefaultEndpoint().url;

const getAppIdFallback = () => getCustomEndpoint().appId || getDefaultEndpoint().appId;

const getWebSocketURL = () => `wss://${getServerAddressFallback()}/websockets/v3`;

const getCustomEndpoint = () => ({
    url: getWebSocketURL(),
    appId: getAppIdFallback(),
});

const getSocketUrl = () =>
    `wss://${getSocketURL()}/websockets/v3?app_id=${getAppId()}&l=${getLanguage()}&brand=${website_name.toLowerCase()}`;

export const generateLiveApiInstance = async api_type => {
    if (api_type === 'binary') {
        const live_api = new LiveApi({
            apiUrl: getWebSocketURL(),
            language: getLanguage().toUpperCase(),
            appId: getAppIdFallback(),
        });
        return live_api;
    }
    const binary_socket = new WebSocket(getSocketUrl());
    const live_api = new DerivAPIBasic({
        connection: binary_socket,
    });
    return live_api;
};
