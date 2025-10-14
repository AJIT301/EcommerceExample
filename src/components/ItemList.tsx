// ItemList.tsx (with loading state)
import { useState, useEffect } from 'react';
import cx from 'classnames';
import { mockItems } from '../data/Items';
import type { Item } from '../types/TypeItem';
import { useTheme } from '../context/theme/ThemeContext';
import styles from '../styles/ItemList.module.css';

export default function ItemList() {
    const { theme } = useTheme();
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API delay
        const timer = setTimeout(() => {
            setItems(mockItems);
            setLoading(false);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <div className={cx(styles.container, styles[theme])}>Loading...</div>;
    }

    return (
        <div className={cx(styles.container, styles[theme])}>
            <ul className={styles.list}>
                {items.map(item => (
                    <li key={item.id} className={cx(styles.item, styles[theme])}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>Price: ${item.price}</p>
                        <p>Category: {item.category}</p>
                        <p className={item.inStock ? styles.inStock : styles.outOfStock}>
                            {item.inStock ? 'In Stock' : 'Out of Stock'}
                        </p>

                        {item.amount !== undefined && item.amount > 0 && (
                            <p>Amount: {item.amount}</p>
                        )}

                    </li>
                ))}
            </ul>
        </div>
    );
}
