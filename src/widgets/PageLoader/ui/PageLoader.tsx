import { ReactNode } from 'react';
import Loader from 'shared/ui/Loader/Loader';
import classNames from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
    children?: ReactNode;
}

export default function PageLoader(props: PageLoaderProps) {
    const { className = '', children = <Loader /> } = props;

    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            {children}
        </div>
    );
}
