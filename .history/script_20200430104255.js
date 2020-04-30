

let arr = [1, 2, 3, 4, 5];

arr.pop(); // del last element
console.log(arr);

arr.push(5); //add to the end

console.log(arr);

arr.shift(); //del first element

console.log(arr);

arr.unshift('Hello'); // add as first el

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(function(item, i, array) {
    console.log(i + ': ' + item + ' (array: ' + array + ')');
});


console.log(arr);

let mass = [1,2,4,7]

//iterate index
for (let key in mass) {
    console.log(key);
}

//iterate values
for (const num of mass) {
    console.log(num);
}

let answer = prompt('','');

let oneArr = [];

oneArr = answer.split(',');

console.log(oneArr);

let twoArr = ['one', 'two', 'three'],
    i = arr.join(', ');

console.log(i);