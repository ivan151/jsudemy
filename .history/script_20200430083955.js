let options = {
    width: 1024,
    height: 800,
    name: 'test'
};

console.log(options.name);

options.bool = false;

console.log(options);

options.colors = {
    border: 'black',
    bg: 'red'
};
console.log(options);