import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(undefined));
  const [isXTurn, setIsXTurn] = useState(true);
  const winner = checkWinner(board);

function checkWinner(board) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];

    if (
      board[a] &&
      board[a] === board[b] &&
      board[b] === board[c]
    ) {
      return a; // or b or c
    }
  }

  return -1;
}

  return (
    <div><div className="grid">
      {Array(9)
        .fill(undefined)
        .map((_, idx) => (
          <button
            key={idx}
            className="grid-item"
            disabled={!!board[idx] || winner !== -1}
            onClick={() => {
              // Prevent overwriting an already filled cell
              if (board[idx]) return;

              const turn = isXTurn ? "X" : "O";

              const newBoard = [...board];
              newBoard[idx] = turn;

              setBoard(newBoard);
              setIsXTurn(!isXTurn);
            }}
          >
            {board[idx]}
          </button>
        ))}
    </div>
    {winner !== -1 && <h3 style={{ color: 'black' }}>{board[winner]} Won</h3>}
    <button onClick={() => {
      setBoard(Array(9).fill(undefined));
      setIsXTurn(true);
    }}>Reset</button></div>
  );
}

export default App;
