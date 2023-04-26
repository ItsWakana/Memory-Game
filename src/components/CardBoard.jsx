import { useEffect } from 'react';

const CardBoard = (props) => {
  
  useEffect(() => {

    props.reorder();
  },[]);
  
  return (
      <div className="card-container">
      {props.gameCards.map((card) => (
        <div className="card-container__card" key={card.data}
         onClick={() => props.play(card)}>{card.desc} {card.clicked ? 'Clicked' : 'Not clicked'}</div>
      ))}
    </div>
  )
}

export default CardBoard;