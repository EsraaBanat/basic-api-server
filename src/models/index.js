'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
const food = require('./food.model');
const clothes = require('./clothes.model');
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

let sequelizeOptions =
process.env.NODE_ENV === "production"
? {
            dialect: 'postgres',
            protocol: 'postgres',
            dialectOptions: {
               ssl: { require: true, rejectUnauthorized: false},
                native: true
            }
        } : {};

let sequelize = new Sequelize(POSTGRES_URI);

module.exports = {
    db: sequelize,
    Food:food(sequelize,DataTypes),
    Clothes:clothes(sequelize,DataTypes),
}