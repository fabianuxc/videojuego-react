import { useState } from 'react'
import Game from './pages/Game'

import './assets/index.css'


function App() {

  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <>
    <header>
      <ul>
        <li><a href='/'>Juego</a></li>
     
      </ul>
      
    </header>
      { currentPath === '/' && <Game />}    </>
  )
}

export default App
