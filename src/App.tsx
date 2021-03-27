import { useEffect, useState } from 'react'
import './App.css';
import getCharacters from './services/character-utils'

function App() {
  const [characters, setCharacters] = useState([])
  
  useEffect(() => {
    getCharacters()
      .then(characters => setCharacters(characters))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Characters</h1>
        {JSON.stringify(characters)}
      </header>
    </div>
  );
}

export default App;
