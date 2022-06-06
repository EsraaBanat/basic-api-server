'use strict';
const express = require("express");
const { Food } = require("../models/index");
console.log({ Food });
const foodRouter = express.Router();

foodRouter.get("/", homePage);
foodRouter.get("/food", getFood);
foodRouter.post("/food", addFood);
foodRouter.get("/food/:id", getOneFood);
foodRouter.put("/food/:id", updateFood);
foodRouter.delete("/food/:id", deleteFood);

function homePage(req, res) {
    res.status(200).send("Hello From My DB");
}


async function getFood(req, res) {
    let foodResult = await Food.findAll();
    res.status(200).json(foodResult);
    // console.log({res})
}
async function addFood(req, res) {
    let newFood = req.body;
    let food = await Food.create(newFood);
    res.status(201).json(food);
}
async function getOneFood(req, res) {
    let foodId =  req.params.id;
    let food = await Food.findOne({ where: { id: foodId } });
    res.status(200).json(food);
}
async function updateFood(req, res) {
    let foodId = req.params.id;
    let updateFood = req.body;
    let foundFood = await Food.findOne({ where: { id: foodId } });
    let updatedFood = foundFood.update(updateFood);
    res.status(201).json(updatedFood);
}
async function deleteFood(req, res) {
    let foodId = req.params.id;
    // let foundFood = Food.findOne({ where: { id: foodId } }); 
    // try to ensure that record is exist
    let deleteFood = await Food.destroy({ where: { id: foodId } });
    res.status(204).json(deleteFood);
}

module.exports = foodRouter;


