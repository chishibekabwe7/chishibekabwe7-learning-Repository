const express = require('express'); //Import Express
const joi = require('joi'); //Import Joi
const app = express(); //Create Express Application on the app variable
app.use(express.json()); //Use a json file

//Give data to the server
const customers  = [
    {title:'George' , id:1},
    {title:'Josh' , id:2},
    {title:'Tyler' , id:3},
    {title:'Alice' , id:4},
    {title:'Candice' , id:5},
]

//Read Request Handlers
// Display the Message when the URL const of '/'
app.get('/',(req,res) => {
    res.send('Welcome to CJ,s first API tutorial! ');
})

//Display the List of Customers when URL consists of api customers 
app.get('/api/customers', (req,res) => {
    res.send(customers);
});

//Display the Information of specific customer when you mention the id.
app.get('/api/customers/:id',(req,res) => {
     const customer = customers.find(c => c.id === parseInt(req.params.id));
     //If there is no valid customer ID, then display an error with following
});

//Port Environment variable
const port = process.env.PORT || 8080;
app.listen(port, () => console.log('Listening on port ${port}.. '));