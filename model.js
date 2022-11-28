const _generateRandomNumber = () => Math.floor(Math.random() * 100 + 1);
export const getPokemon = async () => {
  const randomPokemonId = _generateRandomNumber();
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
  );
  const pokemonInfo = await response.json();
  console.log(pokemonInfo.name);
  const name = pokemonInfo.name;
  const sprite = pokemonInfo.sprites.other["official-artwork"].front_default;

  return [name, sprite];
};
