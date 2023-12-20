import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '9d04a978admshd5498f1cd8338f9p11a334jsn76d1506f9367',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/'


const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: ({count}) => ({
                url: `/coins`, 
                params: {
                    limit: count
                },
                headers: cryptoApiHeaders
            })
        }),
        getCryptoDetails: builder.query({
            query: ({uuid, timePeriod}) => ({
                url: `/coin/${uuid}`, 
                params: {
                    timePeriod: timePeriod
                },
                headers: cryptoApiHeaders
            })
        }),
        getCryptoHistory: builder.query({
            query: ({uuid, timePeriod}) => ({
                url: `/coin/${uuid}/history`, 
                params: {
                    timePeriod: timePeriod
                },
                headers: cryptoApiHeaders
            })
        }),
        
    })
})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoApi