import { useEffect, useState } from 'react'
import './App.css';
import CharactersList from './components/character/CharactersList';
import Loading from './components/Loading';
import getCharacters from './services/character-utils'

function App() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCharacters()
      .then(characters => setCharacters(characters))
    setLoading(false)
  }, [])

  return (
    <div className="App">
      <h1>Hey Arnold Characters</h1>
      <section className='all-characters'>
        {
          loading
            ? <Loading />
            : <CharactersList characterProps={characters} />
        }
      </section>
      <footer>Characters from <a href="https://hey-arnold-api-documentation.netlify.app/" target="_blank" rel="noreferrer">Hey Arnold API</a></footer>
    </div>
  );
}

export default App;
