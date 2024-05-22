
//Importing the dotenv libary
require('dotenv').config();

//Importing the express library
const express = require('express');

//Adding the express library to a variable named "APP"
const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//Routes
app.get('/', (req,res) => {
    res.json({mssg: 'Welcome to the App'})
})

//listening for requests
app.listen(process.env.PORT, () => {
    console.log('Listening the express server on PORT 4000!');
})


