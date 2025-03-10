import classNames from 'shared/lib/classNames/classNames';
import NotFoundIcon from 'shared/assets/NotFound.jpg';
import { Typography, Image } from 'antd';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export default function NotFoundPage(props: NotFoundPageProps) {
    const { className } = props;

    return (
        <section className={classNames(cls.NotFound, {}, [className])}>
            <Typography.Title>Страница не найдена</Typography.Title>
            <Typography.Text>
                {' '}
                Проверьте правильность введенного URL
            </Typography.Text>
            <Image
                src={NotFoundIcon}
                width={320}
            />
        </section>
    );
}
