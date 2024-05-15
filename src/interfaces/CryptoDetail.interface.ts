export interface CryptoDetailApiResult {
    coin: Coin;
}

export interface Coin {
    uuid:                  string;
    symbol:                string;
    name:                  string;
    description:           string;
    color:                 string;
    iconUrl:               string;
    websiteUrl:            string;
    links:                 Link[];
    supply:                Supply;
    numberOfMarkets:       number;
    numberOfExchanges:     number;
    "24hVolume":           string;
    marketCap:             string;
    fullyDilutedMarketCap: string;
    price:                 string;
    btcPrice:              string;
    priceAt:               number;
    change:                string;
    rank:                  number;
    sparkline:             string[];
    allTimeHigh:           AllTimeHigh;
    coinrankingUrl:        string;
    tier:                  number;
    lowVolume:             boolean;
    listedAt:              number;
    hasContent:            boolean;
    notices:               null;
    contractAddresses:     any[];
    tags:                  string[];
}

export interface AllTimeHigh {
    price:     string;
    timestamp: number;
}

export interface Link {
    name: string;
    type: string;
    url:  string;
}

export interface Supply {
    confirmed:   boolean;
    supplyAt:    number;
    max:         null;
    total:       string;
    circulating: string;
}

export interface CryptoHistoryParams {
    coinId: string | undefined; 
    timePeriod: string;
}

export interface CryptoHistoryResult {
    change:  string;
    history: History[];
}

export interface History {
    price:     string;
    timestamp: number;
}