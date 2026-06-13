function Board() {
  return (
    <div className="grid">
      {Array(9)
        .fill(undefined)
        .map((value, idx) => (
          <button
            key={idx}
            className="grid-item"
            onClick={() => {
              if (board[idx]) return;

              const turn = isXTurn ? "X" : "O";
              const newBoard = [...board];
              newBoard[idx] = turn;

              setBoard(newBoard);
              setisXTurn(!isXTurn);
            }}
          >
            {board[idx]}
          </button>
        ))}
    </div>
  );
}