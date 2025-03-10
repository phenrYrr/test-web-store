import classNames from 'shared/lib/classNames/classNames';
import Header from 'widgets/Header/ui/Header';
import cls from './MainPage.module.scss';
import ProductListItem from 'entities/Product/ui/ProductListItem/ProductListItem';
import { useGetDealersQuery, useGetGoodsQuery } from 'shared/api/api';

interface MainPageProps {
    className?: string;
    id?: string;
}

export default function MainPage(props: MainPageProps) {
    const { className } = props;

    // Если список диллеров указан

    const { data: dealers } = useGetDealersQuery();
    const { data: products, isLoading } = useGetGoodsQuery(dealers?.join(', '));

    // Если список диллеров не указан

    // const { data: products, isLoading } = useGetGoodsQuery();

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <Header className={cls.Header} />
            <div className={classNames(cls.main, {}, [className])}>
                <ProductListItem
                    product={products || []}
                    isLoading={isLoading}
                />
            </div>
        </div>
    );
}
