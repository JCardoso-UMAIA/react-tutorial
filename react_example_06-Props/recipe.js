'use strict';
const e = React.createElement;

class Recipe extends React.Component {
    render() {
        return e('section', { id: this.props.sectionId },
            e('h1', { id: 'recipe-0', 'data-type': 'title' }, this.props.name),
            e('ul', { className: 'ingredients' },
                // Dynamically create list items using props
                this.props.ingredients.map((ingredient, i) => e('li', { key: i }, ingredient))
            ),
            e('section', { className: 'instructions' },
                e('h2', null, 'Cooking Instructions'),
                // Dynamically create paragraphs for instructions
                this.props.instructions.map((instruction, i) => e('p', { key: i }, instruction))
            )
        );
    }
}

// Define the data to pass as props
const recipeData = {
    sectionId: 'baked-salmon',
    name: 'Baked Salmon',
    ingredients: [
        '1 lb Salmon',
        '1 cup Pine Nuts',
        '2 cups Butter Lettuce',
        '1 Yellow Squash',
        '1/2 cup Olive Oil',
        '3 cloves of Garlic'
    ],
    instructions: [
        'Preheat the oven to 350 degrees.',
        'Spread the olive oil around a glass baking dish.',
        'Add the salmon, garlic, and pine nuts.',
        'Bake for 15 minutes.',
        'Add the yellow squash and put back in the oven.',
        'Remove from oven and let cool for 15 minutes.'
    ]
};

// Render the Recipe component with props
const root = ReactDOM.createRoot(document.getElementById('react-container'));
root.render(e(Recipe, recipeData));
