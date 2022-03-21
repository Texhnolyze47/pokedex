const pokemonContainer = document.querySelector(".pokemon-container");
const spinner = document.querySelector("#spinner");
const modal = document.querySelector(".modal-div")

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const main_types = Object.keys(colors);

const fetchPokemon = (id) => {
  spinner.style.display = "block";

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
      spinner.style.display = "none";
    });
};

const numberPokemons = (number) => {
  spinner.style.display = "block";
  for (let i = 1; i <= number; i++) {
    fetchPokemon(i);
  }
};

const createPokemonCard = (pokemon) => {
  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `#${pokemon.id}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  const poke_types = pokemon.types.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colors[type];

  card.style.background = color;

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);
  pokemonContainer.appendChild(card);
  spriteContainer.onclick = function progressBars (stats){
    const fondoModal = document.createElement('div');
    fondoModal.classList.add("modal");

    const infoModal = document.createElement('div');
    infoModal.classList.add("modal-container");

    fondoModal.appendChild(infoModal);
    modal.append(fondoModal);
  }
};


numberPokemons(18);

function progressBars(stats) {
  const statsContainer = document.createElement("div");
  statsContainer.classList.add("stats-container");

  for (let i = 0; i < 3; i++) {
    const stat = stats[i];

    const statPercent = stat.base_stat / 2 + "%";
    const statContainer = document.createElement("stat-container");
    statContainer.classList.add("stat-container");

    const statName = document.createElement("p");
    statName.textContent = stat.stat.name;

    const progress = document.createElement("div");
    progress.classList.add("progress");

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressBar.setAttribute("aria-valuenow", stat.base_stat);
    progressBar.setAttribute("aria-valuemin", 0);
    progressBar.setAttribute("aria-valuemax", 200);
    progressBar.style.width = statPercent;

    progressBar.textContent = stat.base_stat;

    progress.appendChild(progressBar);
    statContainer.appendChild(statName);
    statContainer.appendChild(progress);

    statsContainer.appendChild(statContainer);
  }

  return statsContainer;
}



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
