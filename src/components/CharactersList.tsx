import React from 'react'
import CharacterItem from './CharacterItem'

interface CharacterType {
  _id: string;
  name: string;
  image: string;
}
interface CharactersListProps {
  characterProps: Array<CharacterType>
}

const CharactersList: Function = ({ characterProps }: CharactersListProps): JSX.Element[] => (
  characterProps.map(character =>
    <CharacterItem character={character} />
  )
)

export default CharactersList
