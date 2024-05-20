import ApiResult from '../interfaces/ApiResult.interface'
import { CryptoNew } from '../interfaces/CryptoNew.interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
}

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com'

const createRequest = (url: string) => ({ url, headers: cryptoNewsHeaders })


export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query<ApiResult<CryptoNew[]>, void>({
            query: () => createRequest('/v1/decrypt')
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi