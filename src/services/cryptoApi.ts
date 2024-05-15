import { CryptoDetailApiResult, CryptoHistoryParams, CryptoHistoryResult } from '../interfaces/CryptoDetail.interface'
import ApiResult from '../interfaces/ApiResult.interface'
import { CryptoApiResult } from '../interfaces/CryptoApi.interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CurrencyRefApiResult } from '../interfaces/CurrenciesRef.interface'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '2ebaf20490msh76c69b72c855c70p15e458jsn48e31901119d',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/'

const createRequest = (url: string, params?: { timePeriod: string }) => ({ url, headers: cryptoApiHeaders, params })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query<ApiResult<CryptoApiResult>, number>({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getSCryptoDetails: builder.query<ApiResult<CryptoDetailApiResult>, string | undefined>({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getSCryptoHistory: builder.query<ApiResult<CryptoHistoryResult>, CryptoHistoryParams>({
            query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history`, { timePeriod })
        }),
        getCurrenciesReferences: builder.query<ApiResult<CurrencyRefApiResult>, void>({
            query: () => createRequest('/reference-currencies')
        })
    })
})

export const { 
    useGetCryptosQuery, 
    useGetSCryptoDetailsQuery, 
    useGetSCryptoHistoryQuery,
    useGetCurrenciesReferencesQuery
} = cryptoApi