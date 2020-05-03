let box = document.getElementById('box'), // by id
    btn = document.getElementsByTagName('button'), // by tag
    circle = document.getElementsByClassName('circle'), //by class
    heart = document.querySelectorAll('.heart'), //all elements
    oneHeart = document.querySelector('.heart'); //first element

box.style.backgroundColor = 'green';

console.log(box);
console.log(btn);
console.log(btn[2]);
console.log(circle);
console.log(circle[2]);