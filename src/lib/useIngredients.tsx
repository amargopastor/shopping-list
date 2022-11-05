

import React, { useContext, useState } from 'react';

export const IngredientsContext = React.createContext({});

export const useIngredients = () => {
    const ctx = useContext(IngredientsContext);
    if (!ctx) {
        throw new Error(
            'Please wrap your app in a <ListaCompraManager> component before using useIngredients hook',
          );
    }
    const { ingredients, addItem } = useContext(IngredientsContext);

    // Función para comprobar si tengo un ingrediente
    const hasIngredient = (ing) => ingredients
    .filter((e) => e.ingredient === ing).length > 0;

    // Función que devuelve los missingIngredients
    const getMissingIngredient = (recipe) => {
        const completedIngredients = recipe
        .filter((ingredient) => ingredients.map((e) => e.ingredient)
        .includes(ingredient));

        const setRecipe = new Set(completedIngredients);
        const missingIngredients = new Set([...recipe].filter((x) => !setRecipe.has(x)));

        return {
            missingIngredients,
            completed: completedIngredients.length === recipe.length,
        };
    };

    return {
        ingredients,
        addItem,
        hasIngredient,
        getMissingIngredient,
    };
};

export const ShoppingListManager = ({ children }) => {
    const [items, setItems] = useState([]);
    const addItem = (item) => {
        console.log('Adding item', item);
        setItems([...items, item]);
    };

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <IngredientsContext.Provider value={{ ingredients: items, addItem }}>
                {children}
        </IngredientsContext.Provider>
    );
};