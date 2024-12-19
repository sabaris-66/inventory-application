const pool = require("./pool");

exports.selectPokemonList = async () => {
  console.log(
    process.env.USER,
    process.env.PASSWORD,
    process.env.HOST,
    process.env.DATABASE
  );
  const { rows } = await pool.query("select * from pokemons order by id");
  return rows;
};

exports.selectSearchText = async (searchText) => {
  const search = `%${searchText.toUpperCase()}%`;
  const { rows } = await pool.query(
    "select * from pokemons where upper(pokemon) like $1 or upper(trainer) like $1 or upper(type) like $1",
    [search]
  );
  return rows;
};

exports.selectPokemonCategories = async () => {
  const { rows } = await pool.query("select distinct type from pokemons");
  return rows;
};

exports.selectPokemonSpCategories = async (category) => {
  console.log(category);
  const { rows } = await pool.query(
    "select * from pokemons where type = $1 order by id",
    [category]
  );
  return rows;
};

exports.insertPokemon = async (pokemon, trainer, type) => {
  await pool.query(
    "insert into pokemons (pokemon, trainer, type) values ($1, $2, $3)",
    [pokemon, trainer, type]
  );
};

exports.updatePokemon = async (id, pokemon, trainer, type) => {
  await pool.query(
    "update pokemons set pokemon = $2, trainer = $3, type = $4 where id = $1",
    [id, pokemon, trainer, type]
  );
};

exports.deletePokemon = async (id) => {
  await pool.query("delete from pokemons where id = $1", [id]);
};
