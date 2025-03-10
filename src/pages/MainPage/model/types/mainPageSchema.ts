import { Product } from 'entities/Product/model/types/product';

export interface MainPageSchema {
    isLoading?: boolean;
    error?: string;
    data: Product[];
}
