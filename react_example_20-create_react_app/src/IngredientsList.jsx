import React from 'react';

const IngredientsList = ({ items }) => {
    return (
        <ul className="ingredients">
            {items.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
            ))}
        </ul>
    );
};

export default IngredientsList;