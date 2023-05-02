import React from 'react';

const Scoreboard = (props) => {

    const { currentScore, bestScore } = props.scores;

    return (
        <div className="scoreboard">
            <p>Current: {currentScore}</p>
            <p>Best: {bestScore}</p>
        </div>
    )
}

export default Scoreboard;