import classNames from 'shared/lib/classNames/classNames';
import { useCart } from '../lib/useCart';
import cls from './CartPage.module.scss';
import { Button, Typography, Input, Image, Card, Flex } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { photoURL } from 'entities/Product/ui/ProductItem/ProductItem';

interface CartPageProps {
    className?: string;
}

export default function CartPage({ className }: CartPageProps) {
    const { items, total, removeItem, updateItemQuantity, clear } = useCart();
    const [inputValues, setInputValues] = useState<Record<string, string>>({});

    const handleInputChange = (name: string, value: string) => {
        setInputValues((prev) => ({ ...prev, [name]: value }));

        const numericValue = Number(value);
        if (!isNaN(numericValue) && numericValue >= 0) {
            if (numericValue === 0) {
                removeItem(name);
            } else {
                updateItemQuantity(name, numericValue);
            }
        }
    };

    const handleBlur = (name: string, value: string) => {
        if (value === '') {
            setInputValues((prev) => ({
                ...prev,
                [name]:
                    items
                        .find((item) => item.name === name)
                        ?.quantity.toString() || '1',
            }));
        }
    };

    const handleIncrement = (name: string, currentQuantity: number) => {
        updateItemQuantity(name, currentQuantity + 1);
    };

    const handleDecrement = (name: string, currentQuantity: number) => {
        if (currentQuantity > 1) {
            updateItemQuantity(name, currentQuantity - 1);
        } else {
            removeItem(name);
        }
    };

    return (
        <div className={classNames(cls.CartPage, {}, [className])}>
            <Typography.Title level={1}>Корзина</Typography.Title>
            {items.length === 0 ? (
                <Typography.Text>Корзина пуста</Typography.Text>
            ) : (
                <>
                    <div className={cls.Wrapper}>
                        <ul className={cls.List}>
                            {items.map((item) => (
                                <li
                                    key={item.name}
                                    className={cls.Item}
                                >
                                    <Flex
                                        gap={16}
                                        align="center"
                                    >
                                        <Card
                                            className={cls.Card}
                                            style={{ width: 150 }}
                                            title={item.name}
                                        >
                                            <Image
                                                className={cls.Image}
                                                width={100}
                                                src={photoURL
                                                     +
                                                    item.image
                                                }
                                                alt={item.name}
                                            />
                                            <Typography.Text>
                                                {item.price} ₽
                                            </Typography.Text>
                                        </Card>
                                        <Flex
                                            gap={12}
                                            align="center"
                                            vertical
                                        >
                                            <Button
                                                icon={<MinusOutlined />}
                                                onClick={() =>
                                                    handleDecrement(
                                                        item.name,
                                                        item.quantity,
                                                    )
                                                }
                                            />
                                            <Input
                                                type="number"
                                                min={0}
                                                value={
                                                    inputValues[item.name] ??
                                                    item.quantity
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        item.name,
                                                        e.target.value,
                                                    )
                                                }
                                                onBlur={(e) =>
                                                    handleBlur(
                                                        item.name,
                                                        e.target.value,
                                                    )
                                                }
                                                style={{
                                                    width: 60,
                                                    textAlign: 'center',
                                                }}
                                            />
                                            <Button
                                                icon={<PlusOutlined />}
                                                onClick={() =>
                                                    handleIncrement(
                                                        item.name,
                                                        item.quantity,
                                                    )
                                                }
                                            />
                                            <Button
                                                onClick={() =>
                                                    removeItem(item.name)
                                                }
                                                danger
                                            >
                                                Удалить
                                            </Button>
                                        </Flex>
                                    </Flex>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={cls.TotalSection}>
                        <Typography.Title level={3}>
                            Итого: {total.toFixed(2)} ₽
                        </Typography.Title>
                        <Button
                            onClick={clear}
                            type="primary"
                            danger
                        >
                            Очистить корзину
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
}
