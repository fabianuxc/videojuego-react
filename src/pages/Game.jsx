import { useState } from 'react'
import { Square } from '../components/Square'
import { TURNS } from '../constants'
import { checkWinnerFrom, checkEndGame } from '../logic/board'
import { WinnerModal } from '../components/WinnerModal'
import { Board } from '../components/Board'
import { saveToStorage, resetStorage } from '../logic/storage'
import '../assets/index.css'


function Game() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    console.log(turnFromStorage)
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetStorage()
  }

  const updateBoard = (index) => {
    // avoid replacing a filled square or if there's a winner
    if (board[index] || winner) return

    // update board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // change turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // save game
    saveToStorage({
      board: newBoard,
      turn: newTurn
    })

    // check for winners
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // tie
    }

  }

  return (
      <main className='board'>
        <h1>Tic tac toe</h1>
        <button onClick={resetGame}>Game reset</button>
        <section className='game'>
          <Board board={board} updateBoard={updateBoard} />
        </section>
        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>

        <WinnerModal resetGame={resetGame} winner={winner} />
      </main>
    
  )
}

export default Game
