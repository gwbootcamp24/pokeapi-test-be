import fs from 'node:fs/promises';
const data = await fs.readFile('./pokemon.json', { encoding: 'utf8' });
// console.log("data",data);
const pokemonData = JSON.parse(data);
export default pokemonData; 