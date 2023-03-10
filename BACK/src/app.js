const express = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

app.get("/rickandmorty/character/:id", (req, res) => {
    let { id } = req.params;
    getCharById(res, Number(id));
});
app.get("/rickandmorty/detail/:detailId", (req, res) => {
    let { id } = req.params;
    getCharDetail(res, Number(id));
});

const fav = [];
app.get("rickandmorty/fav", (req, res) => {
    res.status(200).json(fav);
});
app.post("rickandmorty/fav", (req, res) => {
    const body = req.body;
    fav.push(body);
});
app.delete("rickandmorty/fav/:id", (req, res) => {});

module.exports = app;
