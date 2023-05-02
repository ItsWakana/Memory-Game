import { useState } from 'react';

const Card = (props) => {

    const [hovered, setHovered] = useState(false);

    const handleHoverIn = () => {
        setHovered(true);
    }

    const handleHoverOut = () => {
        setHovered(false);
    }

    const { card } = props;

    return (
        <div className="card-container__card" key={card.data}
        onClick={() => props.play(card)}
        onMouseEnter={handleHoverIn}
        onMouseLeave={handleHoverOut}>
            <img className="card__image" 
            src={`/images/${card.data}.jpeg`} 
            ></img>

            <div className={`card__info ${hovered ? 'card__info--visible' : ''}`}>{card.desc}</div>
        </div>
    )
}

export default Card;