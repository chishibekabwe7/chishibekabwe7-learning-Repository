//importing express to our project
const express = require('express');

const app = express();
const PORT = 3002;

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`));

app.get('/groceries',(req,res) => {
    res.send([
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
    ])
})