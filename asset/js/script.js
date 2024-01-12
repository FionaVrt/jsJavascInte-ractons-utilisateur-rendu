fetch('https://pokeapi.co/api/v2/pokemon-species')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    }
    );

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
                pokemon.innerHTML = `<div class="cards__card card">
                <h2 class="card__heading">${data.name}</h2>
                <p class="card__price">$10</p>
                <a href="" class="card__cta cta">View Project</a>
            </div>`
                cardsContainerInner.appendChild(pokemon);
            
            });
    }
    