const name = "Chris";
const greeting = `Hello, ${name};` // use ${} to concatenate content of variables 
console.log(greeting);

const greeting2 = "Hey";
const name2 = "Ali";
console.log(greeting2 + ", " + name2 +'!');//can also concatenate using '+'
console.log("Hey".concat(" ", name2)); //+ can be replaced using concat()

console.log(${greeting}, ${name});

let text = "Apple, Banana, Kiwi, Apple";
console.log(text.length); //.length gives length

//slice takes a portion of a string, in this example it is 7 to 13(13 is excluded)
//when parameter is negative, it counts from the back
console.log(text.slice(-4));
console.log(text.slice(7, 13));
console.log(text.substr(7, 6)); //substr(x,y) where x is the starting position and y is the length of substring

newText = text.replace(/APPLE/i,"Orange"); //.replace(x,y) replaces x with y, using /x/i makes it case insensitive, 
// using /x/g or replaceAll() allows replacement for all instances
console.log(newText);

let helloWorld = "Hello World          ";
console.log(helloWorld.trim()); //removes extra space
//trimstart() removes white space at the start only; trimend() from the end

let a = "a";
console.log(a.padStart(5,"@")); //padStart adds padding before the string where x specifies the position of the string
//padEnd adds padding after the string

let sample = "sample";
console.log(sample.charAt(3)); //charAt returns character at specified position
sample.split("") //can use .split(","), this converts strings into arrays

