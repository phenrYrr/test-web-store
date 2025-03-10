import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Badge } from 'antd';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import classNames from 'shared/lib/classNames/classNames';

interface BasketProps {
    className?: string;
    count?: number;
}

export default function Cart(props: BasketProps) {
    const { className, count } = props;

    return (
        <Badge
            size="small"
            count={count}
            className={classNames('', {}, [className])}
        >
            <AppLink
                to={RoutePath.basket}
                theme={AppLinkTheme.BUTTON}
            >
                Корзина
            </AppLink>
        </Badge>
    );
}
