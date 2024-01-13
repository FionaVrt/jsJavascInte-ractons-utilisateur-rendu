fetch('https://pokeapi.co/api/v2/pokemon-species')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    }
    );
// pour afficher les 150 pokemons
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
                <img src="${data.sprites.front_default}" alt="pokemon" class="card__img">
                <a href="produit.html" class="card__cta cta">View Project</a>
            </div>`
                cardsContainerInner.appendChild(pokemon);
            
            });
    }

    document.addEventListener('DOMContentLoaded', function () {
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
        window.addEventListener('scroll', function () {
            // Afficher le bouton lorsque l'utilisateur fait défiler vers le bas
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });
    
        scrollToTopBtn.addEventListener('click', function () {
            // Faire défiler la page vers le haut lorsqu'on clique sur le bouton
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    });
    

    
    