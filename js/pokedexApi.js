const pokemonContainer = document.querySelector(".pokemon-container");
const spinner = document.querySelector("#spinner");
const openModal = document.querySelector(".modal-div")

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

  card.onclick = function ls (stats){
    abrirPokemon(stats)
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



const abrirPokemon = (pokemon) => {
  let pokemonPage = `
  <div class="fondo_transparente">
  <div class="modal">
      <div class="modal_cerrar">
          <span>x</span>
      </div>
      <div class="modal_titulo">${pokemon.name}</div>
      <div class="modal_mensaje">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, nam? Minus nihil temporibus, minima reprehenderit, rem explicabo earum nemo debitis, maxime deserunt quidem. Quia odit quae voluptate nobis sit beatae!</p>
      </div>
      <div class="modal_botones">
          <a href="" class="boton">COMPARTIR</a>
          <a href="" class="boton">ACEPTAR</a>
      </div>
  </div>
</div> 

  `
  return pokemonPage;

}




