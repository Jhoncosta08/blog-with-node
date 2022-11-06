//variables
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');


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


//main route
app.get('/', (req, res) => {
   res.render('index');
});


//set app port
app.listen(3000, () => {
   console.log('Server running...');
});
