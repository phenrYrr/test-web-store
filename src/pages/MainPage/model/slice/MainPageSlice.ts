import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MainPageSchema } from '../types/mainPageSchema';
import { fetchProductList } from '../services/fetchProductList';
import { Product } from 'entities/Product/model/types/product';

const initialState: MainPageSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
};

export const MainPageSlice = createSlice({
    name: 'MainPageSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProductList.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchProductList.fulfilled,
                (state, action: PayloadAction<Product[]>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(
                fetchProductList.rejected,
                (state, action: PayloadAction<string>) => {
                    state.data = undefined;
                    state.error = action.payload;
                },
            );
    },
});

export const { reducer: MainPageReducer, actions: MainPageActions } =
    MainPageSlice;
