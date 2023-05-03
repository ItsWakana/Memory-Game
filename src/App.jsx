import { useReducer, useRef } from 'react'
import CardBoard from './components/CardBoard';
import Scoreboard from './components/Scoreboard';
import style from './index.css';
import cardDetails from './cards.json'

function App() {

  const initialState = {
    cards: [],
    gameStarted: false
  }

  const [{cards, gameStarted}, dispatch] = useReducer(reducer, initialState);

  const currentScore = cards.filter((card) => card.clicked).length;

  const bestScore = useRef(0);

  if (bestScore.current < currentScore) {
    bestScore.current = currentScore;
  }
  function reducer(state, action) {
    switch (action.type) {
      case 'RESET_ROUND':
        return {
          ...state,
          cards: action.payload.resetCardClick
        }
      case 'SHUFFLE_CARDS': 
        return {
          ...state,
          cards: action.payload.shuffledCards
        }
      case 'START_GAME': 
        return {
          ...state,
          gameStarted: true,
          cards: cardDetails
        }
      default:
        return state;
    }
  }

  return (
    <>
      {gameStarted ? (
        <div className="main-container">
          <Scoreboard current={currentScore} best={bestScore.current} />
          <CardBoard gameCards={cards} dispatch={dispatch}/>          
        </div>
      ) : (
        <div>
          <h1 className="game-title">Memory Game</h1>
          <button 
          className="start-button" 
          onClick={() => dispatch({
            type: 'START_GAME'
          })}>Start Game</button>
        </div>
      )}
    </>
  )
}

export default App
