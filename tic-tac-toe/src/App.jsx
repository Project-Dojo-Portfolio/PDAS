import { useState } from 'react';

import GameBoard from "./components/GameBoard";
import GameOver from './components/GameOver';
import Player from "./components/Player";
import Log from './components/Log';

import { WINNING_COMBINATIONS } from './winning-combinations';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  let gameBoard = initialGameBoard;

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }

    let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(
        firstSquareSymbol && 
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
      ){
        winner = firstSquareSymbol;
      }
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O': 'X');
    setGameTurns(prevTurns => {
        let currentPlayer = 'X';
        if(prevTurns.length > 0 && prevTurns[0].player === 'X') {
          currentPlayer = '0';
        }
        const updatedTurns = [{ square: { row: rowIndex, col: colIndex}, player: activePlayer  }, ...prevTurns];
        return updatedTurns;
    });
  }

  return (
    <main>
        <div id="game-container">
            <ol id="players" className='highlight-player'>
              <Player 
                  initialName="Player 1" 
                  symbol="X"  
                  isActive={activePlayer === 'X'}/>
              <Player 
                  initialName="Player 2" 
                  symbol="O"  
                  isActive={activePlayer === 'O'}/>
            </ol>
            {winner && <GameOver winner={winner} />}
            <GameBoard 
                  onSelectSquare={handleSelectSquare} 
                  board={gameBoard} />
        </div>

        <Log turns={gameTurns} />
    </main>
  )
}

export default App