//model variables
const sequelize = require('sequelize');
const connection = require('../database/database');


//create a articles model and define articles table
const articles_model = connection.define('articles', {
    title: { type: sequelize.STRING, allowNull: false },
    slug: { type: sequelize.STRING, allowNull: false },
    body: { type: sequelize.TEXT, allowNull: false }
});


//exports
module.exports = articles_model;

