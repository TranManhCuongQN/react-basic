import React, { useReducer, useState } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./Board";
import "./GameStyles.css";

const Game = () => {
  // Array(9).fill(null) -> tạo ra mảng 9 phần tử có giá trị null
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);

  // * Gôm tất cả state vào 1 object cho dễ quản lý
  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true,
  // });

  //* useReducer()
  const initialState = {
    board: Array(9).fill(null),
    xIsNext: true,
  };

  const gameReducer = (state, action) => {
    switch (action.type) {
      case "CLICK": {
        const { board, xIsNext } = state;
        const { index, winner } = action.payload;
        if (winner || board[index]) return state;

        // Không muốn sửa trực tiếp cái state này nên tạo ra nextState mới và sửa trên đó sau khi sửa xong thì update lại state ban đầu
        const nextState = JSON.parse(JSON.stringify(state));
        nextState.board[index] = xIsNext ? "X" : "O";
        nextState.xIsNext = !xIsNext;
        return nextState;
      }
      case "RESET": {
        // CLone
        const nextState = JSON.parse(JSON.stringify(state));
        nextState.board = Array(9).fill(null);
        nextState.xIsNext = true;
        return nextState;
      }
      default:
        break;
    }
    return state;
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);

  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    // const boardCopy = [...state.board];
    // Nếu game có người chiến thắng rồi hoặc ô đó đc nhấn rồi thì không cho nhấn vào
    // if (winner || boardCopy[index]) return;
    // boardCopy[index] = state.xIsNext ? "X" : "O";
    // setBoard(boardCopy);
    // setXIsNext(!xIsNext);

    //* useState
    // setState({
    //   ...state,
    //   board: boardCopy,
    //   xIsNext: !state.xIsNext,
    // });

    //* useReducer
    dispatch({
      type: "CLICK",
      payload: {
        index: index,
        winner: winner,
      },
    });
  };
  const handleResetGame = () => {
    dispatch({
      type: "RESET",
    });
    // setBoard(Array(9).fill(null));
    // setXIsNext(true);
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick} />
      {winner && (
        <div className="game-winner">{winner ? `Winner is ${winner}` : ""}</div>
      )}
      <button onClick={handleResetGame} className="game-reset">
        Reset game
      </button>
    </div>
  );
};

export default Game;
