import CharacterItem from './CharacterItem'
interface CharacterType {
  _id: string;
  name: string;
  image: string;
}
interface CharactersListProps {
  characterProps: Array<CharacterType>;
  currDragged: Function
}

const CharactersList: Function = ({ characterProps }: CharactersListProps): JSX.Element[] => (
  characterProps.map((character, index) =>
    <CharacterItem character={character} index={index} key={character._id} />
  )
)

export default CharactersList
