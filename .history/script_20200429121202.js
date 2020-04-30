let num = 20
function showFirstMessage(text) {
    alert(text);
    num = 10;
} 

showFirstMessage('Hello, world!' + num);
console.log(num);

function calc(a,b) {
    return (a + b);
}

console.log(calc(3,4));

//func declaration
function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();

console.log(anotherNum);

// function expression
let calcul = function calc(a,b) {
    return (a + b);
};

console.log(calcul);

let plusArgs = (a,b) => a + b;

let plus = plusArgs(3,6);

console.log(plus);

let str = 'test';

console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = 12.2;
console.log(Math.round(twelve));

console.log(parseInt(twelve));

console.log(parseFloat(twelve));

