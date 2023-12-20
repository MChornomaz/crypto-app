import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '9d04a978admshd5498f1cd8338f9p11a334jsn76d1506f9367',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

// const options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics',
//     params: {
//       textFormat: 'Raw',
//       safeSearch: 'Off'
//     },

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({count, query}) => ({
                url: `/news/search`, 
                params: {
                    count: count,
                    textFormat: 'Raw',
                    safeSearch: 'Off',
                    freshness: 'Day', 
                    q: query
                },
                headers: cryptoNewsHeaders
            })
        }),
        
    })
})

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi