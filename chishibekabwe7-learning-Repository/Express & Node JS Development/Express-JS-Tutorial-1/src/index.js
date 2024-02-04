//importing express to our project
const express = require('express');

//Declaring "app" variable with express library
const app = express();

//PORT Setup
const PORT = 3002;

//Middleware
app.use(express.json());
app.use(express.urlencoded());
/*
app.use((req,res,next) => {
    console.log(`${req.method}:${req.url}`);
    next();
})
*/


//PORT Setup
app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`));

//Declaring object for your API
const groceryList = [
    {
        item:'milk',
        quantity:2,
    },
    {
        item:'cereal',
        quantity:1,
    },
    {
        item:'pop-tarts',
        quantity:1,
    }
]

//Declaring GET Method
app.get('/groceries',(req,res) => {
    res.send(groceryList);
})

//Declaring POST Method
app.post('/groceries', (req,res) => {
    console.log(req.body);
    groceryList.push(req.body)
    res.send(201);
})

