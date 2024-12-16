const { Router } = require("express");
const pokemonRouter = Router();
const pokemonController = require("../controllers/pokemonController");

pokemonRouter.get("/", pokemonController.getPokemonList);
pokemonRouter.get("/search", pokemonController.getPokemonSearch);
pokemonRouter.get("/categories", pokemonController.getPokemonCategories);
pokemonRouter.get("/spCategories", pokemonController.getPokemonSpCategories);
pokemonRouter.get("/create", pokemonController.getCreatePokemon);
pokemonRouter.post("/create", pokemonController.postCreatePokemon);
pokemonRouter.get("/update", pokemonController.getUpdatePokemon);
pokemonRouter.post("/update", pokemonController.postUpdatePokemon);
pokemonRouter.post("/delete", pokemonController.postDeletePokemon);
module.exports = pokemonRouter;
