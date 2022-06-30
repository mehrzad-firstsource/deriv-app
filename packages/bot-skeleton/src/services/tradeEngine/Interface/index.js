import getTicksInterface from './TicksInterface';
import {
    candleField,
    candleValues,
    dateTimeStringToTimestamp,
    isCandleBlack,
    getAskPrice,
    getBalance,
    miscAlert as alert,
    miscConsole as console,
    miscPrompt as prompt,
    readDetails,
    getPayout,
    getPurchaseReference,
    getSellPrice,
    getTime,
    getTotalProfit,
    initTradeEngine as init,
    isResult,
    isSellAtMarketAvailable as isSellAvailable,
    isTradeAgainObserver as isTradeAgain,
    notify,
    notifyTelegram,
    purchase,
    sellAtMarket,
    sleep,
    startTradeEngine as start,
    stopTradeEngine as stop,
    tradeEngineObserver,
    watch,
    getTotalRuns,
    indicators,
} from '../trade';

export const getInterface = () => {
    return {
        getTicksInterface: getTicksInterface(),
        alert,
        candleField,
        candleValues,
        isCandleBlack,
        console,
        dateTimeStringToTimestamp,
        getAskPrice,
        getBalance,
        getPayout,
        getSellPrice,
        getPurchaseReference,
        getTime,
        getTotalProfit,
        init,
        isResult,
        isSellAvailable,
        isTradeAgain,
        notify,
        notifyTelegram,
        prompt,
        purchase,
        readDetails,
        sellAtMarket,
        sleep,
        start,
        stop,
        tradeEngineObserver,
        watch,
        getTotalRuns,
        ...indicators,
    };
};
