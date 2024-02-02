//importing express to our project
const express = require('express');

const app = express();
const PORT = 3002;

app.use(express.json());
app.use(express.urlencoded());

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`));

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

app.get('/groceries',(req,res) => {
    res.send(groceryList);
})

app.post('/groceries', (req,res) => {
    console.log(req.body);
    groceryList.push(req.body)
    res.send(201);
})

