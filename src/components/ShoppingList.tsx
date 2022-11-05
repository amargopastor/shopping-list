/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { useIngredients } from '../lib/useIngredients';
import { InputItem } from './inputItem';

import { Item } from './Item';

export const ShoppingList = () => {
    const { addItem, ingredients } = useIngredients();
    return (
        <div>
            <pre>{JSON.stringify(ingredients, null, 2)}</pre>
            {ingredients.map((it) => <Item key={it.ingredient} item={it} />)}
        <div>
            <InputItem onAddItem={addItem} />
        </div>
        </div>
    );
};