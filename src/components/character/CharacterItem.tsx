interface CharacterType {
  _id: string;
  name: string;
  image: string;
}

interface CharacterItemProp {
  character: CharacterType
}

const CharacterItem = ({ character }: CharacterItemProp): JSX.Element => {
  return (
    <div className='single-character'>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
    </div>
  )
}

export default CharacterItem
