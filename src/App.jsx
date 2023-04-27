import { useState } from 'react'
import CardBoard from './components/CardBoard';
import Scoreboard from './components/Scoreboard';
import style from './index.css';

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [cards, setCards] = useState([]);

  const [gameStarted, setGameStarted] = useState(false);

  const reorderCards = () => {

    const shuffledArray = [...cards];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  const resetRound = () => {
    setCurrentScore(0);

    const resetCards = cards.map((card) => {
      return {
        ...card,
        clicked: false
      }
    });

    return resetCards;
  }

  const playRound = (clickedCard) => {

    if (clickedCard.clicked) {
      const resetCards = resetRound();

      setCards(resetCards);

      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      return;
    }

    setCurrentScore(currentScore + 1);
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

    setCards(updatedCards);

  }

  const handleDisplayVisibility = (hoveredCard) => {


    const updatedCards = cards.map((card) => {
      if (hoveredCard === card) {
        return {
          ...card,
          detail: !card.detail,
        }
      }
      return card;
    });

    setCards(updatedCards);
  } 

  const handleGameStart = () => {
    setGameStarted(true);

    setCards([
      { data: 1, desc: 'badger', clicked: false, detail: false },
      { data: 2, desc: 'capybara', clicked: false, detail: false },
      { data: 3, desc: 'cat', clicked: false, detail: false },
      { data: 4, desc: 'cow', clicked: false, detail: false },
      { data: 5, desc: 'deer', clicked: false, detail: false },
      { data: 6, desc: 'dog', clicked: false, detail: false },
      { data: 7, desc: 'frog', clicked: false, detail: false },
      { data: 8, desc: 'hamster', clicked: false, detail: false },
      { data: 9, desc: 'horse', clicked: false, detail: false },
      { data: 10, desc: 'panda', clicked: false, detail: false },
      { data: 11, desc: 'sloth', clicked: false, detail: false },
      { data: 12, desc: 'squirrel', clicked: false, detail: false },
    ])
  }

  return (
    <>
      {gameStarted ? (
        <div>
          <Scoreboard current={currentScore} best={bestScore} />
          <CardBoard gameCards={cards} reorder={reorderCards}
          play={playRound} visibility={handleDisplayVisibility}/>
        </div>
      ) : (
        <div>
          <button onClick={handleGameStart}>Start Game</button>
        </div>
      )}
    </>
  )
}

export default App
