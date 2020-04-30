let num = 20
function showFirstMessage(text) {
    alert(text);
    num = 10;
} 

showFirstMessage('Hello, world!' + num);
console.log(num);