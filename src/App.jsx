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

  const gameWinner = cards.every((card) => card.clicked);
  if (gameStarted && gameWinner) {
    bestScore.current = 0;
    return (
      <dialog open>
        <h2>Congratulations! </h2>
        <p>You guessed all {cards.length} of the cards without a single mistake!</p>
        <p>Click below to have another go</p>
        <form method="dialog">
          <button onClick={() => dispatch({
            type: 'RESET_GAME'
          })}>Press me</button>
        </form>
      </dialog>
    )
  }
  if (bestScore.current < currentScore) {
    bestScore.current = currentScore;
  }
  function reducer(state, action) {
    switch (action.type) {
      case 'RESET_GAME': 
        return initialState;
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
          gameStarted: !state.gameStarted,
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
