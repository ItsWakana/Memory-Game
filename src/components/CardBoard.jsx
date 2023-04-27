import { useEffect } from 'react';

const CardBoard = (props) => {
  
  useEffect(() => {

    props.reorder();
  },[]);
  
  return (
      <div className="card-container">
      {props.gameCards.map((card) => (
        <div className="card-container__card" key={card.data}
         onClick={() => props.play(card)}>
          <img className="card__image" 
          src={`/images/${card.data}.jpeg`} 
          onMouseOver={() => props.visibility(card)}></img>

          {card.detail ? (
            <div className="card__info">{card.desc}</div>
          ) : null}
         </div>
      ))}
    </div>
  )
}

export default CardBoard;