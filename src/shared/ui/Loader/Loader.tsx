import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

export enum LoaderTheme {
    CLASSIC = 'classic-loader',
}

interface LoaderProps {
    className?: string;
    theme?: LoaderTheme;
}

export default function Loader(props: LoaderProps) {
    const { className = '', theme = LoaderTheme.CLASSIC } = props;

    return (
        <div className={classNames(cls[theme], {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
}
