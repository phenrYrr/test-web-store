import { StateSchema } from 'app/provider/StoreProvider';

export const selectCartItems = (state: StateSchema) => state.Cart.items;
export const selectCartTotal = (state: StateSchema) =>
    state.Cart.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
    );
