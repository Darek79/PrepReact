import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PRODUCT } from 'Types/ProductTypes';

export const productApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/products',
    }),
    tagTypes: ['Products'],
    endpoints: build => ({
        getProduct: build.query<PRODUCT, number>({
            query: id => ({ url: `/${id}` }),
            keepUnusedDataFor: 60,
        }),
        getProductLimit: build.query<{ products: PRODUCT[] }, number>({
            query: limit => ({ url: `/?limit=${limit}` }),
        }),
    }),
});
export const { useGetProductQuery, useGetProductLimitQuery } = productApi;
