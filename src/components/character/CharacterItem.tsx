import { Draggable } from 'react-beautiful-dnd'

interface CharacterType {
  _id: string;
  name: string;
  image: string;
}

interface CharacterItemProp {
  character: CharacterType;
  currDragged: Function;
  index: number
}

const CharacterItem: Function = ({ character, index }: CharacterItemProp): JSX.Element => {
  return (
    <Draggable
      draggableId={character._id}
      index={index}
      key={character._id}>

      {(provided) => (
        <div
          className='single-character'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>

          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />

        </div>
      )
      }
    </Draggable >
  )
}

export default CharacterItem
