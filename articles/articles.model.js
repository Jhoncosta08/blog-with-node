//model variables
const sequelize = require('sequelize');
const connection = require('../database/database');
const category_model = require('../categories/categories.model');


//create a articles model and define articles table
const articles_model = connection.define('articles', {
    title: { type: sequelize.STRING, allowNull: false },
    slug: { type: sequelize.STRING, allowNull: false },
    body: { type: sequelize.TEXT, allowNull: false }
});


//relation between models
category_model.hasMany(articles_model); // one category has many articles - relation of 1-N
articles_model.belongsTo(category_model); // one article has one category - relation of 1-1


//sync database, force: false serve to create table if not exist
articles_model.sync({ force: false });

//exports
module.exports = articles_model;

