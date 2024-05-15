import ApiResult from "./ApiResult.interface";
import { CryptoHistoryResult } from "./CryptoDetail.interface";

export interface LineChartProps {
    coinHistory: ApiResult<CryptoHistoryResult> | undefined;
    currentPrice: string;
    coinName: string | undefined;
}