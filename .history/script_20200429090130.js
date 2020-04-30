/*if (3*5 == 12) {
    console.log('Correct!');
} else {
    console.log('Incorrect!');
}

let num = 50;

if (num < 49) {
    console.log('Incorrect');
} else if (num > 100) {
    console.log('Too much');
} else {
    console.log('Correct');
}

(num == 50) ? console.log('Correct') : console.log('Incorrect');
*/

let num = 50;

switch (num) {
    case num < 49:
        console.log('Incorrect');
        break;
    case num > 49:
        console.log('Too much');
        break;
    case num = 50:
        console.log('Correct');
        break;
    default:
        console.log('WTF?');
        break;
}






