import { useState } from 'react';

const Card = (props) => {

    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered((prevState) => !prevState);
    }
    const { card } = props;

    return (
        <div className="card-container__card" key={card.data}
        onClick={() => props.play(card)}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}>
            <img className="card__image" 
            src={`/images/${card.data}.jpeg`} 
            ></img>

            <div className={`card__info ${hovered ? 'card__info--visible' : ''}`}>{card.desc}</div>
        </div>
    )
}

export default Card;