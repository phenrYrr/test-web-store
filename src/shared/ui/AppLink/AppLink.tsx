import { Link, LinkProps } from 'react-router-dom';
import classNames from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    CLASSIC = 'classic',
    BUTTON = 'button',
    CLEAR = 'clear',
    NAV_LINK = 'nav_link',
    ACCENT = 'accent',
}

export interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export default function AppLink(props: AppLinkProps) {
    const {
        children,
        to,
        className = '',
        theme = AppLinkTheme.CLEAR,
        ...otherProps
    } = props;

    return (
        <Link
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
}
