import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

// (charmander.savePokemonToDb(0))

charmander.publicApi = 'https://fernado-herrera.com'

console.log(charmander)
