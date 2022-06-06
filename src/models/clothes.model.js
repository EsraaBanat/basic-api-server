'use strict';

const Clothes = (sequelize,DataTypes) => 
    sequelize.define("Clothes", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        style:{
            type: DataTypes.TEXT,
        },
        color: {
            type: DataTypes.TEXT,
        }
    })


module.exports = Clothes;