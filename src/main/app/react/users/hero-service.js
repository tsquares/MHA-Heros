// TODO: declare URL where server listens for HTTP requests
const HEROS_URL = "http://localhost:8080/api/heros"

// TODO: retrieve all heros from the server
export const findAllHeros = () => 
    fetch(HEROS_URL)
        .then(response => response.json())

export default{
    findAllHeros
}

// TODO: retrieve a single hero by their ID
export const findHeroById = (id) => {}

// TODO: delete a hero by their ID
export const deleteHero = () => {}

// TODO: create a new hero
export const createHero = (hero) => {}

// TODO: update a hero by their ID
export const updateHero = (id, hero) => {}

// TODO: export all functions as the API to this service
export default {}
