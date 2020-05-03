console.log(0 || "" || 2 || undefined || true || false);
console.log('one' < 'three');

console.log(+'infinity');

let u = [1,2,3],
    b = [1,2,3];

console.log(u == b);

console.log(null || 2 && 3 || 4);

g = 2 && 1 && null && 0 && undefined;

console.log(g);

console.log('1'[0]);


h = [] + 1 + 2;

console.log(h);
console.log(typeof(h));


let y = 1,
    x = y = 2;

console.log(x);

let a = [] + false - null + true;

console.log(a);