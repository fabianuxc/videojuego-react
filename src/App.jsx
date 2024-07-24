import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}



const Square = ({ children, updateBoard, index }) => {
  return (
    <div className='square'>
      {children}
    </div>
  )
}
function App() {

  const [board, setBoard] = useState(['x', 'x', 'x', 'o', 'o', 'x', 'x', 'o', 'x'])
  
  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
    </main>
  )
}

export default App
