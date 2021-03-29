import React, { useState, useEffect } from 'react'
import CharactersList from '../presentational/character/CharactersList';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { getCharacters, reorderList } from '../../services/character-utils';
import Loading from '../presentational/Loading'

const Characters = () => {
  const [characterList, setCharacterList] = useState([])
  const [currDragged, setCurrDragged] = useState(null)
  // TODO: check loading 
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
    </div>
  )
}

export default Characters
