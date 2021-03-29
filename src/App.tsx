import './App.css';
import Characters from './components/container/CharactersContainer'

function App() {
  return (
    <div className="App">
      <h1>Hey Arnold Characters</h1>
      <section className='all-characters'>
        <Characters />
      </section>
      <footer>Characters from <a href="https://hey-arnold-api-documentation.netlify.app/" target="_blank" rel="noreferrer">Hey Arnold API</a></footer>
    </div>
  );
}

export default App;
