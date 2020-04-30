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