require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");
const appPort = process.env.APP_PORT || 3000;
const pokemonRouter = require("./routes/pokemonRouter");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", pokemonRouter);

app.listen(appPort, () => console.log("App is running successfully"));
