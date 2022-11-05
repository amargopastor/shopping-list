/* eslint-disable import/extensions */
import React from 'react';
import { useIngredients } from '../lib/useIngredients';

export const FullRecipe = ({ recipe }) => {
    // del hook useIngredient solo necesito coger getMissingIngredient:
    const { getMissingIngredient } = useIngredients();
    const { missingIngredients, completed } = getMissingIngredient(recipe);

    if (completed) {
        return (<p>✅ Receta completada</p>);
    }
    return (
        <p>
        ❌ <b>Faltan ingredientes: </b>
        {[...missingIngredients].join(', ')}
        </p>
    );
};