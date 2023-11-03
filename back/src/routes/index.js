const { login } = require("../src/controllers/login");
const { getCharById } = require("../src/controllers/getCharById");
const { postFav, deleteFav } = require("../src/controllers/handleFavorites");
// const { Router } = require("express");
// const express = require('express')
// const router = express.Router() lo podemos requerir asi o asi como en la siguiente linea
const router = require("express").Router();

router.get("/character/:id", getCharById);

router.get("/login", login);

router.post("/fav", postFav);

router.delete("/fav", deleteFav);

module.exports = router;
