const axios = require("axios");

const getCharDetail = async (res, id) => {
    try {
        const response = await axios(
            `https://rickandmortyapi.com/api/character/${id}`
        );
        if (!response) throw new Error(`El personaje ${id} no existe mi raid`);
        const data = await response.data;
        const character = {
            id: data.id,
            image: data.image,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            status: data.status,
        };
        res.status(200).json(character);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = getCharDetail;
