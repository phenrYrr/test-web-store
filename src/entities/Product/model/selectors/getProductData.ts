import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

export const getProductData = (state: StateSchema) => state.product.data;
export const getProductError = (state: StateSchema) => state.product.error;
export const getProductIsLoading = (state: StateSchema) =>
    state.product.isLoading;
