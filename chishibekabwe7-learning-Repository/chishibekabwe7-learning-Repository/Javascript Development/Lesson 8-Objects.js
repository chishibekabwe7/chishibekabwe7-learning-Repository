// //Defining an object
// const product = {
//     name: 'socks',
//     price: 1090
//     //property value pair
// };

// //Outputing the Objects
// console.log(product);
// console.log(typeof product);

// //Outputing the Object by specifying it
// console.log(product.name);
// console.log(product.price);

// //Altering the elements in our object
// product.name = 'cotton socks';
// console.log(product)

const product2 = {
    name: 'shirt',
    rating:{
        stars: 4.5,
        count: 87
    },
    fun: function function1(){
        console.log('function inside object');
    }
};

//Copy by References
const product3 = product2;

//Outputing with dot notation
console.log(product2.name);

//Outputing with bracket notation
console.log(product2['name']);

//Outputing a nested object
console.log(product2.rating.count)

//Outputing the property with a function
product2.fun();

const jsonString = JSON.stringify(product2);
console.log(jsonString)
console.log(JSON.parse(jsonString))

console.log('hello'.length);
console.log('hello'.toUpperCase());
console.log('HELLO'.toLowerCase());

