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

  const handleGameStart = () => {
    setGameStarted(true);

    setCards([
      { data: 1, desc: 'Zebra', clicked: false },
      { data: 2, desc: 'Frog', clicked: false },
      { data: 3, desc: 'Dog', clicked: false },
      { data: 4, desc: 'Cat', clicked: false },
      { data: 5, desc: 'Horse', clicked: false },
      { data: 6, desc: 'Camel', clicked: false },
    ])
  }

  return (
    <>
      {gameStarted ? (
        <div>
          <Scoreboard current={currentScore} best={bestScore} />
          <CardBoard gameCards={cards} reorder={reorderCards}
          play={playRound}/>
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
