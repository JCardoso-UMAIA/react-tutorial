import React from 'react';
import Summary from './Summary';
import IngredientsList from './IngredientsList';
import Instructions from './Instructions';
import StarRating from './StarRating';

const Recipe = ({ id, name, ingredients, instructions }) => {
    return (
        <section id={id}>
            <Summary
                name={name}
                ingredientsCount={ingredients.length}
                stepsCount={instructions.length}
            />
            <IngredientsList items={ingredients} />
            <Instructions instructions={instructions} />
            <StarRating />
        </section>
    );
};

export default Recipe;