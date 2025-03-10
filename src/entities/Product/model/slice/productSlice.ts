import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { productSchema } from '../types/productSchema';
import { Product } from '../types/product';
import { productFetch } from '../services/productFetch';

const initialState: productSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productFetch.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                productFetch.fulfilled,
                (state, action: PayloadAction<Product>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(productFetch.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: productActions } = productSlice;
export const { reducer: productReducer } = productSlice;
