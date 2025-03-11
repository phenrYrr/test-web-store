import { Button, Card, Image, Typography } from 'antd';
import classNames from 'shared/lib/classNames/classNames';
import { Product } from 'entities/Product/model/types/product';
import cls from './ProductItem.module.scss';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { CartActions } from 'features/Cart/model/slice/CartSlice';

interface ProductItemProps {
    className?: string;
    product: Product;
}

export default function ProductItem(props: ProductItemProps) {
    const { className, product } = props;
    const dispatch = useAppDispatch();

    const handleAddItemToCart = () => {
        dispatch(CartActions.addToCart(product));
    };

    const url = process.env.REACT_APP_API_PHOTO || "https://test-frontend.dev.int.perx.ru"

    return (
        <div className={classNames('', {}, [className])}>
            <Card
                className={classNames(cls.Card, {}, [className])}
                style={{ width: 275 }}
                title={product?.name}
            >
                <div className={classNames(cls.Image, {}, [className])}>
                    <Image
                        className={cls.Image}
                        width={100}
                        src={url + product?.image}
                        alt={product?.name}
                    />
                </div>
                <div className={classNames(cls.Info, {}, [className])}>
                    <Typography.Text>{product?.price} ₽ </Typography.Text>
                    <Button
                        style={{ marginLeft: 30 }}
                        color="danger"
                        variant="filled"
                        onClick={handleAddItemToCart}
                    >
                        В КОРЗИНУ
                    </Button>
                </div>
            </Card>
        </div>
    );
}
