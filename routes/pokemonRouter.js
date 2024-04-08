import { Router } from "express";
import {getAllPokemons,getManyPokemonsDetails, sendPokemonsFE} from '../controllers/pokemonController.js';


export const pokemonRouter = Router();

pokemonRouter.route('/').get(getAllPokemons, getManyPokemonsDetails, sendPokemonsFE);

