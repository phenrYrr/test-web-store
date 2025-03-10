import { Product } from 'entities/Product/model/types/product';

export interface CartItem extends Product {
    quantity: number;
}

export interface CartSchema {
    isLoading?: boolean;
    error?: string;
    items: CartItem[];
}
