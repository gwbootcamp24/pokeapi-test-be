import { Router } from "express";
import {getAllPokemons,getManyPokemonsDetails, getAllPokemonsFromFile, sendPokemonsFE} from '../controllers/pokemonController.js';


export const pokemonRouter = Router();

// pokemonRouter.route('/').get(getAllPokemons, getManyPokemonsDetails, sendPokemonsFE);
pokemonRouter.route('/').get(getAllPokemonsFromFile, sendPokemonsFE);

