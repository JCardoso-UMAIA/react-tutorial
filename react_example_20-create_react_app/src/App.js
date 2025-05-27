import React from 'react';
import Recipe from './Recipe';
import './App.css';

const recipeData = {
    id: 'baked-salmon',
    name: 'Baked Salmon',
    ingredients: [
        '1 lb Salmon',
        '1 cup Pine Nuts',
        '2 cups Butter Lettuce',
        '1 Yellow Squash',
        '1/2 cup Olive Oil',
        '3 cloves of Garlic',
    ],
    instructions: [
        'Preheat the oven to 350 degrees.',
        'Spread the olive oil around a glass baking dish.',
        'Add the salmon, garlic, and pine nuts.',
        'Bake for 15 minutes.',
        'Add the yellow squash and put back in the oven.',
        'Remove from oven and let cool for 15 minutes.',
    ],
};

const App = () => {
    return (
        <div>
            <Recipe
                id={recipeData.id}
                name={recipeData.name}
                ingredients={recipeData.ingredients}
                instructions={recipeData.instructions}
            />
        </div>
    );
};

export default App;
