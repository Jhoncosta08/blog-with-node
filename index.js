//variables
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const categories_controller = require('./categories/categories.controller');
const articles_controller = require('./articles/articles.controller');
//Important you must set in your database the following code SET FOREIGN_KEY_CHECKS=0; this serve to node can create keys
const articles_model = require('./articles/articles.model');
const categories_model = require('./categories/categories.model');


//view engine - ejs
app.set('view engine', 'ejs');


//static files configuration
app.use(express.static('public'));


//body parse - use this extension to work with forms and json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//database - start connection
connection.authenticate().then(() => {
   console.log('database connected!');
}).catch((error) => {
   console.log('database connection error: ', error);
});


//config to use routers controllers
app.use('/', categories_controller);
app.use('/', articles_controller);


//main route
app.get('/', (req, res) => {
   res.render('index');
});


//set app port
app.listen(3000, () => {
   console.log('Server running...');
});
