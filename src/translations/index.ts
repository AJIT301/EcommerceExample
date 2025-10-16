import { translationsEN } from './EN';
import { translationsLT } from './LT';
import { translationsUA } from './UA';
import { translationsNL } from './NL';

export const translations = {
    EN: translationsEN,
    LT: translationsLT,
    UA: translationsUA,
    NL: translationsNL,
};

export type TranslationType = typeof translations;
