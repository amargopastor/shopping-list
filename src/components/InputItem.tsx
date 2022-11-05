import React, { useState } from 'react';

export const InputItem = ({ onAddItem }) => {
    const [item, setItem] = useState({ ingredient: '', quantity: 1 });

    const handleAddItem = () => {
        onAddItem(item);
        setItem({ ingredient: '', quantity: 1 });
    };

    const handleChangeIngredient = (e) => {
        // console.log(e.target.value);
        setItem({ ...item, ingredient: e.target.value });
    };
    const handleChangeQuantity = (e) => {
        if (e.target.value.length === 0) {
            setItem({ ...item, quantity: 1 });
            return;
        }
        const newQuantity = parseInt(e.target.value, 10);
        // eslint-disable-next-line use-isnan
        if (newQuantity !== NaN) {
            setItem({ ...item, quantity: newQuantity });
        }
    };
 return (
<div>
    <pre>{JSON.stringify(item)}</pre>
    <input value={item.ingredient} onChange={handleChangeIngredient} placeholder="Ingredient" />
    <input value={item.quantity} onChange={handleChangeQuantity} placeholder="Quantity" />
    <button onClick={handleAddItem} type="button">Add item</button>
</div>
);
};