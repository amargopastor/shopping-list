import React from 'react';
import { useIngredients } from '../lib/useIngredients';

export const HaveIngredient = ({ ing }) => {
    const { hasIngredient } = useIngredients();
    if (hasIngredient(ing)) {
        return <p style={{ color: 'green' }}>I have {ing}</p>;
    }
        return <p style={{ color: 'red' }}>I dont have any {ing}</p>;
};