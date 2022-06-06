'use strict';
const express = require('express');
const clothesRouter = express.Router();
const { Clothes } = require("../models/index");
console.log({ Clothes });

clothesRouter.get("/", homePage);
clothesRouter.get("/cloth", getClothes);
clothesRouter.post("/cloth", addClothes);
clothesRouter.get("/cloth/:id", getOneClothes);
clothesRouter.put("/cloth/:id", updateClothes);
clothesRouter.delete("/cloth/:id", deleteClothes);

function homePage(req, res) {
    res.status(200).send("Hello From My DB");
}

async function getClothes(req, res) {
    let clothesResult = await Clothes.findAll();
    res.status(200).json(clothesResult);
}
async function addClothes(req, res) {
    let newClothes = req.body;
    let clothes = await Clothes.create(newClothes);
    res.status(201).json(clothes);
}
async function getOneClothes(req, res) {
    let clothesId =  req.params.id;
    let clothes = await Clothes.findOne({ where: { id: clothesId } });
    res.status(200).json(clothes);
}
async function updateClothes(req, res) {
    let clothesId = req.params.id;
    let updateClothes = req.body;
    let foundClothes = await Clothes.findOne({ where: { id: clothesId } });
    let updatedClothes = foundClothes.update(updateClothes);
    res.status(201).json(updatedClothes);
}
async function deleteClothes(req, res) {
    let clothesId = req.params.id;
    let deleteClothes = await Clothes.destroy({ where: { id: clothesId } });
    res.status(204).json(deleteClothes);
}

module.exports = clothesRouter;
