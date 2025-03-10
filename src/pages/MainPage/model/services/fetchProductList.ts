import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from 'entities/Product/model/types/product';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { goodsApi } from 'shared/api/api';

export const fetchProductList = createAsyncThunk<
    Product[],
    string,
    ThunkConfig<string>
>('MainPage/fetchProductList', async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    const { api } = extra;

    try {
        const response = await api.endpoints.getGoods.initiate();

        // @ts-ignore
        if (response.error) {
            return rejectWithValue('Failed to fetch products');
        }

        // @ts-ignore
        return response.data || [];
    } catch (e) {
        return rejectWithValue('Failed to fetch products');
    }
});
