import React, { useState, useEffect } from 'react'
import CharactersList from './components/character/CharactersList';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { getCharacters, reorderList } from './services/character-utils';
import Loading from './components/Loading'
import './App.css';

const App = () => {
  const [characterList, setCharacterList] = useState([])
  const [currDragged, setCurrDragged] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCharacters()
      .then(characters => setCharacterList(characters))
    setLoading(false)
  }, [])

  const handleDragStart = (locationDetails: any) => {
    // serCurrDragged using the src index from locationDetails
    setCurrDragged(locationDetails.source.index)
  }

  const handleDragEnd = (locationDetails: any) => {
    // check drop area is okay
    if (!locationDetails.destination) return setCurrDragged(null)

    // reorder characterList
    reorderList(characterList, locationDetails)

    // set state with new character list order 
    setCharacterList(characterList)

    // reset currDragged 
    setCurrDragged(null)
  }

  return (
    <div>
      <h1>Hey Arnold Characters</h1>
      {
        loading
          ? <Loading />
          : <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
            <Droppable droppableId="characters" direction="horizontal">

              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <div className='all-characters'>
                    <CharactersList characterProps={characterList} />
                  </div>

                  {/* adds placeholder for item */}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

      }
      <footer>Characters from <a href="https://hey-arnold-api-documentation.netlify.app/" target="_blank" rel="noreferrer">Hey Arnold API</a></footer>
    </div>
  )
}

export default App
