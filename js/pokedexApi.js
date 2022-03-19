const pokemonContainer = document.querySelector('.pokemon-container');


const fetchPokemon = (id) => {
 
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then((res) => {
      if (res.status != "200") {
        console.log(res);
        pokeImage("../assets/img/sad.gif");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
      createPokemonCard(data);
    });
};

const numberPokemons = (number) => {
  for(let i = 1; i <= number; i++){
    fetchPokemon(i);
  }
}


const createPokemonCard = (pokemon) => {
  const card = document.createElement('div');
  card.classList.add('pokemon-block');

  const spriteContainer = document.createElement('div');
  spriteContainer.classList.add('img-container');

  const sprite = document.createElement('img');
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement('p');
  number.textContent = `#${pokemon.id}`;

  const name = document.createElement('p');
  name.classList.add('name');
  name.textContent = pokemon.name;

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);

  pokemonContainer.appendChild(card);
}

numberPokemons(9);

////////////////////
// pokemon info  //
///////////////////


// const pokeInfoName = (url) => {
//   const name = document.getElementById("nombrePokemon");
//   name.innerHTML= url;
// };

// const pokeImage = (url) => {
//   const pokePhoto = document.getElementById("pokeImg");
//   pokePhoto.src = url;
// };

// const pokeId = (url) => {
//   const id = document.getElementById("infoId");
//   id.innerHTML = url;
// };

// const pokeHeight = (url) => {
//   const height = document.getElementById("infoHeight");
//   height.innerHTML = url;
// };

// const pokeWeight = (url) => {
//   const weight = document.getElementById("infoWeight");
//   weight.innerHTML = url;
// };

// const pokeAbilities = (url) => {
//   const abilities = document.getElementById("infoAbilities");
//   abilities.innerHTML = url;
// };

// const pokeType = (url) => {
//   const type = document.getElementById("infoType");
//   type.innerHTML = url;
// };

// const pokeEvo = (url) => {
//   const evolution = document.getElementById("infoEvo");
//   evolution.innerHTML = url;
// };

// /////////////////////
// // pokemon stats  //
// ///////////////////

// const pokeVida = (url) => {
//   const vida = document.getElementById("infoVida");
//   vida.innerHTML = url;
// };

// const pokeAtaque = (url) => {
//   const ataque = document.getElementById("infoAtaque");
//   ataque.innerHTML = url;
// };

// const pokeDefensa = (url) => {
//   const defensa = document.getElementById("infoDefensa");
//   defensa.innerHTML = url;
// };

// const pokeAtaqueEspecial = (url) => {
//   const ataqueEspecial = document.getElementById("infoAtaqueEspecial");
//   ataqueEspecial.innerHTML = url;
// };

// const pokeDefensaEspecial = (url) => {
//   const defensaEspecial = document.getElementById("infoDefensaEspecial");
//   defensaEspecial.innerHTML = url;
// };

// const pokeVelocidad = (url) => {
//   const velocidad = document.getElementById("infoVelocidad");
//   velocidad.innerHTML = url;
// };
