const Card = (props) => {

    const { card } = props;

    return (
        <div className="card-container__card" key={card.data}
        onClick={() => {props.play(card); handleHoverOut()}}>

            <div className={"card__info"}>{card.desc}</div>
            <img className="card__image"
            src={`/images/${card.data}.jpeg`}
            ></img>
        </div>
    )
}

export default Card;