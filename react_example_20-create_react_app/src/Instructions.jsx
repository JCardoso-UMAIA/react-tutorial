import React from 'react';

const Instructions = ({ instructions }) => {
    return (
        <section className="instructions">
            <h2>Cooking Instructions</h2>
            {instructions.map((instruction, i) => (
                <p key={i}>{instruction}</p>
            ))}
        </section>
    );
};

export default Instructions;