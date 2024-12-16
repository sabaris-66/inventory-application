const db = require("../db/queries");

exports.getPokemonList = async (req, res) => {
  const pokemons = await db.selectPokemonList();
  console.log("blah", pokemons);
  res.render("index", { pokemons });
};

exports.getPokemonSearch = async (req, res) => {
  const pokemonSearch = await db.selectSearchText(req.query.search);
  res.render("search", { pokemonSearch });
};

exports.getPokemonCategories = async (req, res) => {
  const pokemonCategories = await db.selectPokemonCategories();
  console.log(pokemonCategories);
  res.render("categories", { pokemonCategories });
};

exports.getPokemonSpCategories = async (req, res) => {
  const pokemonSpCategories = await db.selectPokemonSpCategories(
    req.query.spCategory
  );
  res.render("spCategories", { pokemonSpCategories });
};

exports.getCreatePokemon = (req, res) => {
  res.render("create");
};

exports.postCreatePokemon = async (req, res) => {
  await db.insertPokemon(req.body.pokemon, req.body.trainer, req.body.type);
  res.redirect("/");
};

exports.getUpdatePokemon = (req, res) => {
  res.render("update", {
    id: req.query.id,
    pokemon: req.query.pokemon,
    trainer: req.query.trainer,
    type: req.query.type,
  });
};

exports.postUpdatePokemon = async (req, res) => {
  await db.updatePokemon(
    req.query.id,
    req.body.pokemon,
    req.body.trainer,
    req.body.type
  );
  res.redirect("/");
};

exports.postDeletePokemon = async (req, res) => {
  await db.deletePokemon(req.query.id);
  res.redirect("/");
};
