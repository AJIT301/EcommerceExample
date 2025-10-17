// ItemList.tsx (with loading state)
import { useState, useEffect, useMemo } from 'react';
import cx from 'classnames';
import { mockItems } from '../data/Items';
import type { Item } from '../types/TypeItem';
import { useTheme } from '../context/theme/ThemeContext';
import { useTranslation } from '../Hooks/useTranslation';
import styles from '../styles/ItemList.module.css';

type ShowOption = 5 | 10 | 20 | 50 | 'all';
type SortOption = 'nameAz' | 'nameZa' | 'categoryAz' | 'categoryZa' | 'priceHighLow' | 'priceLowHigh';

export default function ItemList() {
    const { theme } = useTheme();
    const t = useTranslation();
    const [allItems, setAllItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);
    const [showCount, setShowCount] = useState<ShowOption>('all');
    const [sortBy, setSortBy] = useState<SortOption>('nameAz');
    const [searchQuery, setSearchQuery] = useState('');
    const [appliedSearchQuery, setAppliedSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Sorting functions
    const sortItems = (items: Item[], sortType: SortOption): Item[] => {
        return [...items].sort((a, b) => {
            switch (sortType) {
                case 'nameAz':
                    return a.name.localeCompare(b.name);
                case 'nameZa':
                    return b.name.localeCompare(a.name);
                case 'categoryAz':
                    return a.category.localeCompare(b.category);
                case 'categoryZa':
                    return b.category.localeCompare(a.category);
                case 'priceHighLow':
                    return b.price - a.price;
                case 'priceLowHigh':
                    return a.price - b.price;
                default:
                    return 0;
            }
        });
    };

    // Suggestions based on search query
    const searchSuggestions = useMemo(() => {
        if (!searchQuery) return [];
        return allItems
            .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0, 5); // Show up to 5 suggestions
    }, [allItems, searchQuery]);

    // Filtered and sorted items
    const items = useMemo(() => {
        if (allItems.length === 0) return [];

        let filtered = allItems;

        // Apply search filter
        if (appliedSearchQuery) {
            filtered = filtered.filter(item =>
                item.name.toLowerCase().includes(appliedSearchQuery.toLowerCase())
            );
        }

        // Apply sorting
        const sorted = sortItems(filtered, sortBy);

        // Apply show limit
        return showCount === 'all' ? sorted : sorted.slice(0, showCount as number);
    }, [allItems, sortBy, showCount, appliedSearchQuery]);

    useEffect(() => {
        setAllItems(mockItems);
        setLoading(false);
    }, []);

    if (loading) {
        return <div data-testid="item-list-container" className={cx(styles.container, styles[theme])}>{t('itemList.loading')}</div>;
    }

    const handleSearch = () => {
        setAppliedSearchQuery(searchQuery.trim());
        setShowSuggestions(false);
    };

    const handleSuggestionClick = (name: string) => {
        setSearchQuery(name);
        setAppliedSearchQuery(name);
        setShowSuggestions(false);
    };

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setShowSuggestions(e.target.value.length > 0);
        if (!e.target.value) {
            setShowSuggestions(false);
        }
    };

    return (
        <div data-testid="item-list-container" className={cx(styles.container, styles[theme])}>
            <div data-testid="filters" className={cx(styles.filters, styles[theme])}>
                <div className={styles.searchGroup}>
                    <div className={styles.searchWrapper}>
                        <input
                            data-testid="search-input"
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                            placeholder={t('filters.searchPlaceholder')}
                            className={cx(styles.searchInput, styles[theme])}
                            title="Search by product name"
                        />
                        <button
                            data-testid="search-button"
                            type="button"
                            onClick={handleSearch}
                            className={cx(styles.searchButton, styles[theme])}
                            title="Search"
                        >
                            🔍
                        </button>
                        {showSuggestions && searchSuggestions.length > 0 && (
                            <ul className={cx(styles.suggestions, styles[theme])}>
                                {searchSuggestions.map((item) => (
                                    <li
                                        key={item.id}
                                        onClick={() => handleSuggestionClick(item.name)}
                                        className={styles.suggestionItem}
                                    >
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className={styles.filterGroup}>
                    <label>{t('filters.showLabel')}</label>
                    <select
                        value={showCount}
                        onChange={(e) => setShowCount(e.target.value === 'all' ? 'all' : parseInt(e.target.value) as ShowOption)}
                        className={cx(styles.filterSelect, styles[theme])}
                        title="Number of items to show"
                    >
                        {(t('filters.showOptions') as unknown as Array<{value: string | number, label: string}>).map(({ value, label }) => (
                            <option key={value.toString()} value={value.toString()}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.filterGroup}>
                    <label>{t('filters.sortLabel')}</label>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as SortOption)}
                        className={cx(styles.filterSelect, styles[theme])}
                        title="Sort items by"
                    >
                        {(t('filters.sortOptions') as unknown as Array<{value: string, label: string}>).map(({ value, label }) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            {items.length === 0 && appliedSearchQuery ? (
                <div className={cx(styles.noResults, styles[theme])}>
                    <p>{t('languages.noItemsFound')}</p>
                    {appliedSearchQuery && (
                        <p className={styles.searchQuery}>For: "{appliedSearchQuery}"</p>
                    )}
                </div>
            ) : (
                <ul className={styles.list}>
                    {items.map(item => (
                        <li key={item.id} className={cx(styles.item, styles[theme])}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{t('itemList.price')}${item.price}</p>
                            <p>{t('itemList.category')} {t(`categories.${item.category}`)}</p>
                            <p className={item.inStock ? styles.inStock : styles.outOfStock}>
                                {item.inStock ? t('itemList.inStock') : t('itemList.outOfStock')}
                            </p>

                            {item.amount !== undefined && item.amount > 0 && (
                                <p>{t('itemList.amount')} {item.amount}</p>
                            )}

                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
