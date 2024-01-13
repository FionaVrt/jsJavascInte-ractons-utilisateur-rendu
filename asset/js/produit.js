fetch('https://pokeapi.co/api/v2/pokemon-species')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const ul = document.querySelector('#challenge-2-2');

        for (let i = 1; i <= 150; i++) {
            const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
        
            fetch(pokemonUrl)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    const h3 = document.createElement('h3');
                    const img = document.createElement('img');
                    const pokemon = document.createElement('div');
                    pokemon.classList.add('pokemon');
                    pokemon.innerHTML = `<div class="produc__inner">
                    <h2 class="main_produc">${data.name}</h2>
                    <p>Type: ${data.types.map((type) => type.type.name).join(', ')}</p>
                    <p>Attack: ${data.stats.find((stat) => stat.stat.name === 'attack').base_stat}</p>
                    <p>Defense: ${data.stats.find((stat) => stat.stat.name === 'defense').base_stat}</p>
                    <p>Speed: ${data.stats.find((stat) => stat.stat.name === 'speed').base_stat}</p>
                    <img src="${data.sprites.front_default}" alt="pokemon" class="card__img">
                </div>`
                    ul.appendChild(pokemon);
                
                });
        }
    });

    
