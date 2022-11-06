//here is the connection with database
//variables
const sequelize = require('sequelize');


//connection object and connection information
const connection = new sequelize('my_blog', 'root', '5897', {
    host: 'localhost',
    dialect: 'mysql'
});


//export class to use in another files
module.exports = connection;

