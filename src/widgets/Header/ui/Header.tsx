import classNames from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { Typography } from 'antd';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Cart } from 'features/Cart';
import cls from './Header.module.scss';
import { useSelector } from 'react-redux';
import { selectCartCount } from 'features/Cart/model/slice/CartSlice';

interface HeaderProps {
    className?: string;
}

export default function Header(props: HeaderProps) {
    const count = useSelector(selectCartCount);
    const { className } = props;

    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <AppLink
                to={RoutePath.main}
                theme={AppLinkTheme.ACCENT}
            >
                <Typography.Title level={2}>STORE</Typography.Title>
            </AppLink>
            <Cart count={count} />
        </header>
    );
}
