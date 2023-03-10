const axios = require("axios");

let getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.data)
        .then((data) => {
            const character = {
                id: data.id,
                image: data.image,
                name: data.name,
                gender: data.gender,
                species: data.species,
            };
            res.status(200).json(character);
        })
        .catch((err) =>
            res.status(500).send(`El personaje ${id} no existe mi raid`)
        );
};

module.exports = getCharById;
