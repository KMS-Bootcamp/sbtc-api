const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//.env
require('dotenv/config');

//Middlewares-----
app.use(bodyParser.json());
//Import Routes
//Everytime go to post, this postsRoute gonna run
const usersRoute = require('./routes/users');
app.use('/users', usersRoute);
//----------------------

//Routes
app.get('/', (req, res) => {
  res.send('Home page');
});

app.use(cors({
  origin: '*'
}));

//Connect to DB
//.env
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => console.log('connected to Datebase!') );

//localhost:3000/users
app.listen(3000);