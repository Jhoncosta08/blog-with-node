//model variables
const sequelize = require('sequelize');
const connection = require('../database/database');


//create a categories model and define categories table
const category_model = connection.define('categories', {
    title: { type: sequelize.STRING, allowNull: false },
    slug: { type: sequelize.STRING, allowNull: false }
});


//exports
module.exports = category_model;
