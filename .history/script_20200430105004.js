let twoArr = ['one', 'two', 'three'], 
    i = twoArr.sort(); //alphabet

console.log(i);

let threeArr = [1,2,5,6,7,2,1];

let sortedArr = threeArr.sort(compare);


function compare(a,b) {
    return a-b;
}

console.log(sortedArr);
