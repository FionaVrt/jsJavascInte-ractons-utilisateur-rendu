// Fonction pour effectuer une requête à l'API PokeAPI
async function getPokemonData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
}

// Fonction pour afficher les données des Pokémon dans la page
async function displayPokemon() {
    const pokemonListContainer = document.getElementById('pokemon-list');
    const pokemonData = await getPokemonData();

    // Boucle à travers la liste de Pokémon et les affiche
    pokemonData.forEach(pokemon => {
        const pokemonElement = document.createElement('p');
        pokemonElement.textContent = pokemon.name;
        pokemonListContainer.appendChild(pokemonElement);
    });
}

// Appel de la fonction pour afficher les Pokémon lorsque la page est chargée
window.onload = displayPokemon;