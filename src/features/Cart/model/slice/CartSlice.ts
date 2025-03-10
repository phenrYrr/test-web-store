import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartSchema } from '../types/Cart';
import { Product } from 'entities/Product/model/types/product';
import { StateSchema } from 'app/provider/StoreProvider';

interface CartItem extends Product {
    quantity: number;
}

const initialState: CartSchema = {
    items: [],
    isLoading: false,
    error: undefined,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const existingItem = state.items.find(
                (item) => item.name === action.payload.name,
            );
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(
                (item) => item.name !== action.payload,
            );
        },
        updateQuantity: (
            state,
            action: PayloadAction<{ name: string; quantity: number }>,
        ) => {
            const item = state.items.find(
                (item) => item.name === action.payload.name,
            );
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const selectCartCount = (state: StateSchema) =>
    state.Cart.items.reduce(
        (sum: number, item: CartItem) => sum + item.quantity,
        0,
    );
export const { actions: CartActions, reducer: CartReducer } = cartSlice;
