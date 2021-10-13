import Team from "./team.js";


let porkemonsListe;
let oneTeam = new Team(); 

window.onload = () => {

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => getPokemonsData(data.results))

}


function getPokemonsData(pokemons) 
{
    console.log(pokemons);
    

    pokemons.forEach(pokemon => 
        
        fetch(pokemon.url)
            .then(response => response.json())
            .then(data => printHtml(data))
    
    );

}

function printHtml(pokemonData)
{
        console.log(pokemonData);

        let type =new Array();

        pokemonData.types.forEach(element => {
            console.log(element.type.name)
            type.push(element.type.name)
        });
        

        document.getElementById('pokemonList').innerHTML += `
        <div class="pokemon">
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        <div class="info">
          <h4 class="name"><b>${pokemonData.name}</b></h4> 
          <p> ${[...type]} </p>
          <a href="#" id="${pokemonData.id}">Add to team</a>
        </div>
        </div>`;
}



