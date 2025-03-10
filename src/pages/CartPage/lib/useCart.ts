import { useSelector } from 'react-redux';
import {
    selectCartItems,
    selectCartTotal,
} from 'features/Cart/model/selectors/getCardData';
import { CartActions } from 'features/Cart/model/slice/CartSlice';
import { Product } from 'entities/Product/model/types/product';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export const useCart = () => {
    const dispatch = useAppDispatch();
    const items = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);

    const addItem = (product: Product) =>
        dispatch(CartActions.addToCart(product));
    const removeItem = (name: string) =>
        dispatch(CartActions.removeFromCart(name));
    const updateItemQuantity = (name: string, quantity: number) =>
        dispatch(CartActions.updateQuantity({ name, quantity }));
    const clear = () => dispatch(CartActions.clearCart());

    return { items, total, addItem, removeItem, updateItemQuantity, clear };
};
