window.onload = () => {

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    
      .then(response => response.json())
      .then(data => getPokemonsData(data.results))

}


function getPokemonsData(pokemons) 
{
    console.log(pokemons);
    
    

    pokemons.forEach(pokemon => 
        console.log(pokemon)
        );
}