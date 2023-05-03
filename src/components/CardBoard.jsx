import { useEffect } from 'react';
import Card from './Card';

const CardBoard = (props) => {
  
  useEffect(() => {

    props.dispatch({
      type: 'SHUFFLE_CARDS',
      payload: { shuffledCards: reorderCards() }
    })
  },[]);
  
  const reorderCards = () => {

    const shuffledArray = [...props.gameCards];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  const resetClickedState = () => {

    const resetCards = props.gameCards.map((card) => {
      return {
        ...card,
        clicked: false
      }
    });

    return resetCards;
  }

  const play = (clickedCard) => {
    if (clickedCard.clicked) {

      props.dispatch({
        type: 'RESET_ROUND',
        payload: { resetCardClick: resetClickedState() }
      });

      return;
    }

    // props.dispatch({
    //   type: 'UPDATE_CURRENT_SCORE',
    // });

    // props.dispatch({
    //   type: 'UPDATE_BEST_SCORE',
    // });

    const shuffledArray = reorderCards();

    const updatedCards = shuffledArray.map((card) => {
      if (card === clickedCard) {
        return {
          ...card,
          clicked: true
        }
      }
      return card;
    });

    props.dispatch({
      type: 'SHUFFLE_CARDS',
      payload: { shuffledCards: updatedCards }
    });
  }

  return (
    <div className="card-container">
      {props.gameCards.map((gameCard) => (
        <Card key={gameCard.data} card={gameCard} play={play}/>
      ))}
    </div>
  )
}

export default CardBoard;