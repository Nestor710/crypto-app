export interface CurrencyRefApiResult {
    stats:      Stats;
    currencies: Currency[];
}

export interface Currency {
    uuid:    string;
    type:    Type;
    iconUrl: null | string;
    name:    string;
    symbol:  string;
    sign:    null | string;
}

export enum Type {
    Coin = "coin",
    Denominator = "denominator",
    Fiat = "fiat",
}

export interface Stats {
    total: number;
}

