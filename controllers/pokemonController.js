import {getAllPokemonsList} from '../services/apiFunctions.js';
// import {showOne} from '../services/'
import * as path from 'path';
import pokemonData from '../services/pokemonData.js';

export async function getAllPokemonsFromFile (req, res, next) {

  try {

    req.allPokemonsCompleteList = pokemonData;

    next();
  } catch (error) {
    next(error);
  }

};

export async function getSinglePokemonFromFile (req, res, next) {
  try {

    const { id } = req.params;
    console.log(id)
    const singlePokemon = pokemonData.find((p)=>{
      console.log(p.id)
      return(p.id === id.toString())})
    console.log(singlePokemon)
    if (singlePokemon === undefined) throw new Error('Pokemon not found')

    req.singlePokemon = singlePokemon

    next();
  } catch (error) {
    next(error);
  }
   

};

export async function getAllPokemons (req, res, next) {

  try {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=10000";
    const allPokemonsList  = await getAllPokemonsList(url);
    req.allPokemonsCompleteList = []
    req.allPokemonsList = allPokemonsList

    next();
  } catch (error) {
    next(error);
  }

};


export async function getManyPokemonsDetails (req, res, next) {

  try {

    console.log("allPokemons", req.allPokemonsList);

    const detailList = await Promise.all(req.allPokemonsList.results.map(async (pokemon)=>{
      console.log("pokemon",pokemon)
      const realPokemon = await getAllPokemonsList(pokemon.url);
      req.allPokemonsCompleteList.push(realPokemon);
    }));
    // const url = "https://pokeapi.co/api/v2/pokemon?limit=2";
    // const allPokemonsList  = await getAllPokemonsList(url);
    console.log("allPokemons", req.allPokemonsCompleteList);
    // req.allPokemonList = allPokemonsList
    // res.send(allPokemonsList);
    next();
  } catch (error) {
    next(error);
  }

};




export async function sendPokemonsFE (req, res, next) {

  try {
    // const wait = setTimeout(()=>{
    // console.log("hello",req.allPokemonsCompleteList)

    // }, 2500);
    // console.log("sendPokemonsFE",req.allPokemonsCompleteList)
    res.send(req?.allPokemonsCompleteList);
  } catch (error) {
    next(error);
  }

};

export async function sendSinglePokemonFE (req, res, next) {

  try {
    // const wait = setTimeout(()=>{
    // console.log("hello",req.allPokemonsCompleteList)

    // }, 2500);
    console.log("sendSinglePokemonFE",req.singlePokemon)
    res.send(req?.singlePokemon);
  } catch (error) {
    next(error);
  }

};

export async function showPokemons (req, res, next) {

  try {
    // console.log("hello",req.pokemons)
    res.render(path.resolve('views/layout.pug'), 
      { 
        title: "YHome",
        pokemons: req.pokemons.results
      }
    );
  } catch (error) {
    next(error);
  }

};

