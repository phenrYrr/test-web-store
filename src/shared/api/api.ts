import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from 'entities/Product/model/types/product';

export const goodsApi = createApi({
    reducerPath: 'goodsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_GET || "https://test-frontend.dev.int.perx.ru/api"
    }),
    endpoints: (builder) => ({
        getGoods: builder.query<Product[], string[] | void>({
            query: (dealers) => {
                const queryString = dealers && dealers.length > 0 ? `?dealers=${dealers.join(',')}` : '';
                return `goods/${queryString}`;
            },
        }),
        getDealers: builder.query<string[], void>({
            query: () => 'dealers/',
        }),
    }),
});

export const { useGetGoodsQuery, useGetDealersQuery } = goodsApi;
