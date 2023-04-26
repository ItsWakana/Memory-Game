import { useState } from 'react'

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [cards, setCards] = useState([]);

  const [gameStarted, setGameStarted] = useState(false);

  const handleGameStart = () => {
    setGameStarted(true);

    setCards([
      {data: 1, desc: 'Zebra'},
      {data: 2, desc: 'Frog'},
      {data: 3, desc: 'Dog'},
      {data: 4, desc: 'Cat'},
      {data: 5, desc: 'Horse'},
      {data: 6, desc: 'Camel'},
    ])
  }
  return (
    <>
      {gameStarted ? (
        // <Scoreboard current={currentScore} best={bestScore} />
        // <CardBoard gameCards={cards} reorder={reorderCards}/>
        <div>
          <h1>Memory Game</h1>
          {cards.map((card) => (
            <div key={card.data}>{card.desc}</div>
          ))}
        </div>

      ) : (
        <div>
          <button onClick={handleGameStart}>Start Game</button>
        </div>
      )}
    </>

    //We should have a scoreboard component in here for displaying our current score and the best score that we have so far.

    //Storing the state of the current score and the best score should probably be as high up in the tree as possible. So we can pass it down. 
  )
}

export default App
