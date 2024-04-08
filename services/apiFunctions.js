export const getAllPokemonsList = async (url) => {
  try{
    const response = await fetch(url);
    const data = await response.json();  
    return data;
  
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getSinglePokemon = async (url) => {
  try{
    const response = await fetch(url);
    const data = await response.json();  
    return data;
  
  } catch (err) {
    console.log(err);
    return false;
  }
};

