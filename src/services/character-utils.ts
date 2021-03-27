export default async function getCharacters() {
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
  const characters = await res.json()

  return characters
}
