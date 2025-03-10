import { Product } from './product';

export interface productSchema {
    isLoading: boolean;
    error?: string;
    data?: Product;
}
