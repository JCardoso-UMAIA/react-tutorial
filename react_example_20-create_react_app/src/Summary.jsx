import React from 'react';

const Summary = ({ name, ingredientsCount, stepsCount }) => {
    return (
        <div className="summary">
            <h1>{name}</h1>
            <p>
                <span>{ingredientsCount} Ingredients</span> | <span>{stepsCount} Steps</span>
            </p>
        </div>
    );
};

export default Summary;