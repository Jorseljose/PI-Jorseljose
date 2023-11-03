const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, gender, species, origin, image, status } = await axios.get(
      `${URL}/{id}`
    ).data;

    let character = {
      id,
      name,
      gender,
      origin,
      image,
      status,
      species,
    };

    return character.name
      ? res.json(character).status(200)
      : res.status(404).send("not found!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getCharById,
};
