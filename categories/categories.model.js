//model variables
const sequelize = require('sequelize');
const connection = require('../database/database');


//create a categories model and define categories table
const categories_model = connection.define('categories', {
    title: { type: sequelize.STRING, allowNull: false },
    slug: { type: sequelize.STRING, allowNull: false }
});


//sync database
categories_model.sync({ force: false });


//exports
module.exports = categories_model;
