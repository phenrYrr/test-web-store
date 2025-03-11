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

declare global {
    interface Window {
        App?: {
            dealers?: string[];
        };
    }
}

export default function MainPage(props: MainPageProps) {
    const { className } = props;
    const [selectedDealers, setSelectedDealers] = useState<string[] | undefined>(undefined);

    useEffect(() => {
        if (window.App?.dealers) {
            setSelectedDealers(window.App.dealers.length > 0 ? window.App.dealers : undefined);
        }
    }, []);

    const { data: goods, isLoading: isLoadingGoods } = useGetGoodsQuery(selectedDealers);

    if (isLoadingGoods) {
        return (
            <div>
                <Loader />
            </div>
        );
    }

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
