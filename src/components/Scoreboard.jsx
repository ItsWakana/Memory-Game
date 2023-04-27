import React from 'react';

const Scoreboard = (props) => {

    const { current, best } = props;

    return (
        <div>
            <p>Current: {current}</p>
            <p>Best: {best}</p>
        </div>
    )
}

export default Scoreboard;