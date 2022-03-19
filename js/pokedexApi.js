//const pokemonContainer = document.querySelector('')


const fetchPokemon = () => {
  const pokeNameInput = document.getElementById("pokeName");
  let pokeName = pokeNameInput.value;
  pokeName = pokeName.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
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

      //info
      let pokeImg = data.sprites.front_default;
      let id = data.id;
      let name = data.name;
      let height = data.height;
      let weight = data.weight;
      let abilities = data.abilities[0].ability.name;
      let types = data.types[0].type.name;
      let evo = data.forms[0].name;
      //stats
      let hp = data.stats[0].base_stat;
      let attack = data.stats[1].base_stat;
      let defense = data.stats[2].base_stat;
      let specialAttack = data.stats[3].base_stat;
      let specialDefense = data.stats[4].base_stat;
      let speed = data.stats[5].base_stat;

      // console.log(pokeImg);
      // console.log(hp);
      // console.log(id);
      // console.log(attack);
      // console.log(name);

      pokeInfoName(name.toUpperCase());
      pokeImage(pokeImg);
      pokeId(id);
      pokeHeight(height);
      pokeWeight(weight);
      pokeAbilities(abilities);
      pokeType(types);
      pokeEvo(evo);

      pokeVida(hp);
      pokeAtaque(attack);
      pokeDefensa(defense);
      pokeAtaqueEspecial(specialAttack);
      pokeDefensaEspecial(specialDefense);
      pokeVelocidad(speed);
    });
};

function numberPokemons(number){
  
}

function createPokemon(pokemon){
  const card = document.createElement('div');
  card.classList.add('Pokemon-block');

  const spriteContainer = document.createElement('div');
  spriteContainer.classList.add('img-container');

  const sprite = document.createElement('img');
  sprite.src = pokemon.sprite.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement('th');
  number.textContent = `#${pokemon.id}`;

}

////////////////////
// pokemon info  //
///////////////////


const pokeInfoName = (url) => {
  const name = document.getElementById("nombrePokemon");
  name.innerHTML= url;
};

const pokeImage = (url) => {
  const pokePhoto = document.getElementById("pokeImg");
  pokePhoto.src = url;
};

const pokeId = (url) => {
  const id = document.getElementById("infoId");
  id.innerHTML = url;
};

const pokeHeight = (url) => {
  const height = document.getElementById("infoHeight");
  height.innerHTML = url;
};

const pokeWeight = (url) => {
  const weight = document.getElementById("infoWeight");
  weight.innerHTML = url;
};

const pokeAbilities = (url) => {
  const abilities = document.getElementById("infoAbilities");
  abilities.innerHTML = url;
};

const pokeType = (url) => {
  const type = document.getElementById("infoType");
  type.innerHTML = url;
};

const pokeEvo = (url) => {
  const evolution = document.getElementById("infoEvo");
  evolution.innerHTML = url;
};

/////////////////////
// pokemon stats  //
///////////////////

const pokeVida = (url) => {
  const vida = document.getElementById("infoVida");
  vida.innerHTML = url;
};

const pokeAtaque = (url) => {
  const ataque = document.getElementById("infoAtaque");
  ataque.innerHTML = url;
};

const pokeDefensa = (url) => {
  const defensa = document.getElementById("infoDefensa");
  defensa.innerHTML = url;
};

const pokeAtaqueEspecial = (url) => {
  const ataqueEspecial = document.getElementById("infoAtaqueEspecial");
  ataqueEspecial.innerHTML = url;
};

const pokeDefensaEspecial = (url) => {
  const defensaEspecial = document.getElementById("infoDefensaEspecial");
  defensaEspecial.innerHTML = url;
};

const pokeVelocidad = (url) => {
  const velocidad = document.getElementById("infoVelocidad");
  velocidad.innerHTML = url;
};
