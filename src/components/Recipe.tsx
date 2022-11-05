/* eslint-disable import/extensions */
import React from 'react';
import { FullRecipe } from './FullRecipe';
import { HaveIngredient } from './HaveIngredient';

const recipe = ['apples', 'flour', 'butter', 'eggs', 'milk'];
// const recipe = ['apples'];

export const Recipe = () => (
    <div>
        <h2>Recipe:</h2>
        {recipe.map((e) => <HaveIngredient key={e} ing={e} />)}
        <FullRecipe recipe={recipe} />
    </div>
);