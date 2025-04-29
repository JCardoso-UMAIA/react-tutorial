'use strict';
const e = React.createElement;

// Star Component
const Star = ({ selected = false, onClick = f => f }) =>
    e('span', { className: selected ? 'star selected' : 'star', onClick: onClick });

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func,
};

// StarRating Component
class StarRating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starsSelected: props.starsSelected || 0,
            currentTime: new Date().toLocaleString(),
        };
        this.change = this.change.bind(this);
    }

    change(starsSelected) {
        this.setState({ starsSelected, currentTime: new Date().toLocaleString() });
    }

    render() {
        const { totalStars } = this.props;
        const { starsSelected } = this.state;
        console.log(this.state.currentTime);
        return e(
            'div',
            { className: 'star-rating' },
            [...Array(totalStars)].map((n, i) =>
                e(Star, {
                    key: i,
                    selected: i < starsSelected,
                    onClick: () => this.change(i + 1),
                })
            )
        );
    }
}

StarRating.propTypes = {
    totalStars: PropTypes.number,
};

StarRating.defaultProps = {
    totalStars: 5,
};

// Summary Component
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

// IngredientsList Component
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

// Instructions Component
class Instructions extends React.Component {
    render() {
        return e(
            'section',
            { className: 'instructions' },
            e('h2', null, 'Cooking Instructions'),
            this.props.instructions.map((instruction, i) =>
                e('p', { key: i }, instruction)
            )
        );
    }
}

// Recipe Component
class Recipe extends React.Component {
    render() {
        return e(
            'section',
            { id: this.props.id },
            e(Summary, {
                name: this.props.name,
                ingredientsCount: this.props.ingredients.length,
                stepsCount: this.props.instructions.length,
            }),
            e(IngredientsList, { items: this.props.ingredients }),
            e(Instructions, { instructions: this.props.instructions }),
            e(StarRating)
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

// Render the Recipe Component
const root = ReactDOM.createRoot(document.getElementById('react-container'));
root.render(e(Recipe, recipeData));
