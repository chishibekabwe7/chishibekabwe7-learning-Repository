/* const express = require('express');

const app = 'express';

const PORT = 5000;
app.listen(PORT, () => console.log(`running express server on PORT ${PORT}`))

app.get('Products', (req,res) => {
    res.send([
        {
            Category:'Furniture',
            Quantity:500
        },
        {
            Category:'Gadgets',
            Quantity:250
        },
        {
            Category:'Buildings Equipments',
            Quantity:1000
        }
    ])

})
*/

const express = require('express');

const app = express();

const PORT = 4000;
app.listen(PORT, () => console.log(`Running express server on port ${PORT}`))

app.get('/Tickets' ,(req,res) => {
res.send([
  {type:'bus',
  ordered:4
},
{type:'flight',
ordered:2},

{type:'Train',
ordered:3}
])

})