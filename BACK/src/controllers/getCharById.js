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
            res.writeHead(200, { "Content-Type": "application/json" }).end(
                JSON.stringify(character)
            );
        })
        .catch((err) =>
            res
                .writeHead(500, { "Content-Type": "text/plain" })
                .end(`El personaje ${id} no existe mi raid`)
        );
};

module.exports = getCharById;
