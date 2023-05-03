import React from 'react';

const Scoreboard = (props) => {

    const { current, best } = props;

    return (
        <div className="scoreboard">
            <p>Current: {current}</p>
            <p>Best: {best}</p>
        </div>
    )
}

export default Scoreboard;