// //Object Destructing//
// const customers = {name: 'customer1', email: 'customer1@gmail.com', gender: 'male'};

// //normal//
// // const name = customer.name;
// // const email = customer.email;
// // const gender = customer.gender;


// //ES6//
// const {name, email, gender} = customers;
// console.log(name, email, gender);

// //Normal Array Destructing//
// const cities = ["Yangon", "Mandalay", "Myitkyina"];
// // const cityOne = cities[0];
// // const cityTwo = cities[1];
// // const cityThree = cities[2];

// //ES6//

//  const [cityOne, cityTwo, cityThree] = cities;
//  console.log (cityOne, cityTwo, cityThree);
//  console.log(cityOne);

// //Spread Operator (...)//

// const customer = {name: 'customer1', email: 'customer1@gmail.com', gender: 'male'};
// const copyCusotmer = {...customer};  //customer ko copy kuu
// console.log (copyCusotmer);

// const town = ["Yangon", "Mandalay", "Myitkyina"];
// const [townOne, townTwo, townThree] = town;
// const copyTown = [...town];
// console.log(town);

// const newCity =["NayPyiTaw", ...cities];
// console.log(newCity);

// const caculate = (x, y) => {
//     return x + y;
// }

// console.log (caculate(3, 2));



// //rest parameter
// const testing = (...para) =>{
//     let total = 0;
//     for (let i = 0; i < para.length; i++){
//         total += para[i];
//     }
//     return total;
// }

// console.log(testing(1,2,3,4,5));

let String = "Welcome to Myanamar";
console.log(String.indexOf("e"));
console.log(String.toUpperCase());
console.log(String.toLowerCase());
console.log(String.length);


//Number//
let num = "10";
let result = parseInt(num, 10);   //String Number to Intrger change
console.log(result);

let num1 = 10;
let ans = num1.toString();  // Numner to String
console.log(ans);

//Objec
const customer = {name: 'customer1', email: 'customer1@gmail.com', gender: 'male'};
console.log (Object.keys(customer));    //Only keys will appear
console.log (Object.values(customer));  //Only values will appear
console.log (customer.hasOwnProperty("name"));        //name shi ma shi sit






