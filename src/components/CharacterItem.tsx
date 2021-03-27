import React from 'react'

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
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
    </div>
  )
}

export default CharacterItem
