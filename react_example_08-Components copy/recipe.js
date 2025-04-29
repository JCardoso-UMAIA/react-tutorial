'use strict';
const e = React.createElement;

// Summary component
class Summary extends React.Component {
    render() {
        return e(
            'div',
            { className: 'summary' },
            e(
                'h1',
                { id: 'recipe-0', 'data-type': 'title' },
                this.props.name
            ),
            e(
                'p',
                null,
                e('span', null, `${this.props.ingredientsCount} Ingredients`),
                e('span', null, ' | '),
                e('span', null, `${this.props.stepsCount} Steps`)
            )
        );
    }
}

// IngredientsList component
class IngredientsList extends React.Component {
    renderListItem(ingredient, i) {
        return e('li', { key: i }, ingredient);
    }

    render() {
        return e(
            'ul',
            { className: 'ingredients' },
            this.props.items.map(this.renderListItem)
        );
    }
}

// Recipe component
class Recipe extends React.Component {
    render() {
        return e(
            'section',
            { id: this.props.sectionId },
            e(Summary, {
                name: this.props.name,
                ingredientsCount: this.props.ingredients.length,
                stepsCount: this.props.instructions.length
            }),
            e(IngredientsList, { items: this.props.ingredients }),
            e(
                'section',
                { className: 'instructions' },
                e('h2', null, 'Cooking Instructions'),
                this.props.instructions.map((instruction, i) =>
                    e('p', { key: i }, instruction)
                )
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

// Render the Recipe component
const root = ReactDOM.createRoot(document.getElementById('react-container'));
root.render(e(Recipe, recipeData));
