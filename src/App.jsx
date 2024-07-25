import { useState } from 'react'
import Game from './pages/Game'
import { ApiExample } from './pages/ApiExample'
import MovieFinder from './pages/MovieFinder'
import './assets/index.css'


function App() {

  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <>
    <header>
      <ul>
        <li><a href='/'>Juego</a></li>
        <li><a href='/apiCall'>API Call</a></li>
        <li><a href='/movieFinder'>Movie Finder</a></li>
      </ul>
      
    </header>
      { currentPath === '/' && <Game />}
      { currentPath === '/apiCall' && <ApiExample />}
      { currentPath === '/movieFinder' && <MovieFinder />}
    </>
  )
}

export default App
