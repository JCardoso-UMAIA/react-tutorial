import React, { useState } from 'react';

const Star = ({ selected = false, onClick = () => {} }) => (
    <span className={selected ? 'star selected' : 'star'} onClick={onClick}></span>
);

const StarRating = ({ totalStars = 5 }) => {
    const [starsSelected, setStarsSelected] = useState(0);

    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((n, i) => (
                <Star
                    key={i}
                    selected={i < starsSelected}
                    onClick={() => setStarsSelected(i + 1)}
                />
            ))}
            <p>
                {starsSelected} of {totalStars} stars
            </p>
        </div>
    );
};

export default StarRating;