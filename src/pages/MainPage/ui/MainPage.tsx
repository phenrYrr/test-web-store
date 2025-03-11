import classNames from 'shared/lib/classNames/classNames';
import Header from 'widgets/Header/ui/Header';
import cls from './MainPage.module.scss';
import ProductListItem from 'entities/Product/ui/ProductListItem/ProductListItem';
import { useGetGoodsQuery } from 'shared/api/api';
import { useEffect, useState } from 'react';
import Loader from 'shared/ui/Loader/Loader';

interface MainPageProps {
    className?: string;
    id?: string;
}

export default function MainPage(props: MainPageProps) {
    const { className } = props;
    const [selectedDealers, setSelectedDealers] = useState<string | undefined>(
        undefined,
    );

    useEffect(() => {
        // @ts-ignore
        if (window.App && window.App.dealers) {
            // @ts-ignore
            setSelectedDealers(window.App.dealers.join(','));
        }
    }, []);

    const { data: goods, isLoading: isLoadingGoods } = useGetGoodsQuery(
        selectedDealers,
        {
            skip: !selectedDealers,
        },
    );

    if (isLoadingGoods)
        return (
            <div>
                <Loader />
            </div>
        );

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <Header className={cls.Header} />
            <div className={classNames(cls.main, {}, [className])}>
                <ProductListItem
                    product={goods || []}
                    isLoading={isLoadingGoods}
                />
            </div>
        </div>
    );
}
