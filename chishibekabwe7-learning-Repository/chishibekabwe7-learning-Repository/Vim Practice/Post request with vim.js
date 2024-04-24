const express = require('express');

const app = express('express');

const PORT = 3000;
app.listen(PORT, () => {console.log(`Running express server on PORT ${PORT}!`)})

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

app.use(express.json());
app.use(express.urlencoded());

app.get('/groceries', (req,res) => {
    res.send(groceryList);
})

app.post('/groceries',(req,res) => {
    console.log(req.body);
    groceryList.push(req.body);
    req.send(201)
})


























































































/*
const express = require('express');

const app = express();

const PORT = 2000;
app.listen(PORT, () => {console.log(`Running express server on Port ${PORT}!`)})

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

app.use(express.json());
app.use(express.urlencoded());

app.get('/groceries',(req,res) => {
res.send(groceryList);
})

app.post('/groceries',(req,res) => {
    console.log(req.body);
    groceryList.push(req.body)
    res.send(201);
})
*/


