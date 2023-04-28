import { useEffect } from 'react';
import Card from './Card';

const CardBoard = (props) => {
  
  useEffect(() => {

    props.reorder();
  },[]);
  
  return (
    <div className="card-container">
      {props.gameCards.map((gameCard) => (
        // <div className="card-container__card" key={card.data}
        // onClick={() => props.play(card)}
        // onMouseEnter={() => props.visibility(card)}
        // onMouseLeave={() => props.visibility(card)}>
        //   <img className="card__image" 
        //   src={`/images/${card.data}.jpeg`} 
        //   ></img>

        //   {card.detail ? (
        //     <div className="card__info">{card.desc}</div>
        //   ) : null}
        // </div>
        <Card key={gameCard.data} card={gameCard} play={props.play}/>
      ))}
    </div>
  )
}

export default CardBoard;