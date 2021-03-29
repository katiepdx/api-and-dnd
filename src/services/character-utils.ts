export async function getCharacters() {
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=5')
  const characters = await res.json()

  return characters
}

export function reorderList(characterList: object[], locationDetails: any): object[] {
  // get the dragged item
  const [draggedItem] = characterList.splice(locationDetails.source.index, 1)

  // insert dragged item at the desired index - new order
  const newOrder = characterList.splice(locationDetails.destination.index, 0, draggedItem)

  return newOrder
}
