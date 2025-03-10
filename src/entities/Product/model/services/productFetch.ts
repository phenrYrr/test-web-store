import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider/config/StateSchema';
import { Product } from '../types/product';

export const productFetch = createAsyncThunk<
    Product,
    string,
    ThunkConfig<string>
>('Product/fetchProduct', async (productId, thunkApi) => {
    //@ts-ignore
    const { api, rejectWithValue } = thunkApi.extra;

    try {
        const response = await api.endpoints.getGoods.initiate(`/${productId}`);

        // @ts-ignore
        if (!response.data) {
            throw new Error();
        }

        // @ts-ignore
        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
