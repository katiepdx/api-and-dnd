import { useEffect, useState } from 'react'
import './App.css';
import CharactersList from './components/CharactersList';
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
        <h1>Hey Arnold Characters</h1>
        <CharactersList characterProps={characters} />
      </header>
    </div>
  );
}

export default App;
