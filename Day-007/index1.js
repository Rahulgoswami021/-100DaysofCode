console.log("in working condition");
//var 
var name ="Rahul"
console.log("data type is "+ (typeof name));
var age = 20 
console.log("data type is "+ (typeof age));

let  isKnowJS = true ;
console.log("data type is " + (typeof isKnowJS));
  
let myName = Number(`Rohit`);
console.log(myName,(typeof myName));
let houseNumber = 90;
console.log(houseNumber.toString(),(typeof houseNumber));
let str0 = 'hello Rohan';
let str1 = "hey harry";
console.log(str1.concat('/')); // add symbol in last
console.log(str0.length);        //  to find lenth of string
console.log(str0.toUpperCase()); // uppercase all latters
console.log(str0[2]);        // seconf no. char
console.log(str0.indexOf('llo'));
console.log(str1.lastIndexOf('ha'));
console.log(str1.charAt('arry'));
console.log(str1.endsWith('o'));
console.log(str0.includes('hello'));
console.log(str0.substring(0,5));
console.log(str0.slice(3));
console.log(str0.split(' '));
console.log(str1.replace('hey','Good Morning,'));
console.log(str1);

let favFruit = "Mango";
let html =` <h1> I am XyZ and my fav fruit is ${favFruit} </h1> `
document.body.innerHTML= html;
console.log(html);
