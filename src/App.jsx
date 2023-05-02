import { useReducer } from 'react'
import CardBoard from './components/CardBoard';
import Scoreboard from './components/Scoreboard';
import style from './index.css';
import cardDetails from './cards.json'

function App() {

  const initialState = {
    currentScore: 0,
    bestScore: 0,
    cards: [],
    gameStarted: false
  }

  const [{currentScore, bestScore, cards, gameStarted}, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case 'UPDATE_CURRENT_SCORE':
        return {
          ...state,
          currentScore: state.currentScore + 1
        }
      case 'RESET_CURRENT_SCORE': 
        return {
          ...state,
          currentScore: 0,
        }
      case 'UPDATE_BEST_SCORE':
        if (state.currentScore > state.bestScore) {
          return {
            ...state,
            bestScore: state.currentScore
          }
        }
        return state;
      case 'RESET_ROUND':
        return {
          ...state,
          currentScore: 0,
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
          <Scoreboard scores={{currentScore, bestScore}} />
          <CardBoard gameCards={cards} dispatch={dispatch}/>          
        </div>
      ) : (
        <div>
          <h1 className="game-title">Memory Game</h1>
          <button onClick={() => dispatch({
            type: 'START_GAME'
          })}>Start Game</button>
        </div>
      )}
    </>
  )
}

export default App
