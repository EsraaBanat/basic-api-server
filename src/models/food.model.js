'use strict';

const food = (sequelize,DataTypes) => 
    sequelize.define("Food", {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        ingredients:{
            type: DataTypes.TEXT,
        },
        isSpicy: {
            type: DataTypes.BOOLEAN,
        }
    })


// validators check :
// https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/

module.exports = food;

