// src/types/Item.ts
export interface Item {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    inStock: boolean;
    amount?: number;
}
