import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface PRODUCT {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images?: string[] | null;
}

type Status = 'idle' | 'pending' | 'fullfilled' | 'rejected';

interface INIT_STATE {
    entity: PRODUCT | [];
    status: Status;
}

const initialState: INIT_STATE = {
    entity: [],
    status: 'pending',
};

const fetchProduct = createAsyncThunk<PRODUCT, string>(
    'products/fetchProduct',
    async (url: string): Promise<PRODUCT> => {
        const response = await fetch(url);
        return (await response.json()) as PRODUCT;
    }
);

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.status = 'pending';
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.entity = action.payload;
            state.status = 'fullfilled';
        });
    },
});
