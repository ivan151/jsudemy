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