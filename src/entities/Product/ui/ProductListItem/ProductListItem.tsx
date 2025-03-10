import { Flex, Skeleton } from 'antd';
import { Product } from 'entities/Product/model/types/product';
import ProductItem from 'entities/Product/ui/ProductItem/ProductItem';
import classNames from 'shared/lib/classNames/classNames';

interface ProductListItemProps {
    className?: string;
    product: Product[];
    isLoading?: boolean;
}

export default function ProductListItem(props: ProductListItemProps) {
    const { product, className, isLoading } = props;

    const renderProducts = (product: Product) => {
        return (
            <ProductItem
                product={product}
                key={product.name}
            />
        );
    };

    return (
        <Flex
            justify="center"
            gap={20}
            wrap="wrap"
            className={classNames('', {}, [className])}
        >
            {isLoading ? <Skeleton active /> : product?.map(renderProducts)}
        </Flex>
    );
}
