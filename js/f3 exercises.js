function add7(num){
    return num + 7;
}
console.log(add7(3));

let multiply = (n1, n2) => n1*n2;
console.log(multiply(2,3));

function capitalize(str){
    f1 = str.slice(0,1);
    f2 = str.slice(1,);
    upperf1 = f1.toUpperCase();
    lowerf2 = f2.toLowerCase();
    return (upperf1+lowerf2);
}
console.log(capitalize("JaVAscripT"));

function lastLetter(str){
    return str.slice(-1);
}
console.log(lastLetter("PIFEHASD"));