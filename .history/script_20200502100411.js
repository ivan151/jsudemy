let box = document.getElementById('box'), // by id
    btn = document.getElementsByTagName('button'), // by tag
    circle = document.getElementsByClassName('circle'), //by class
    heart = document.querySelectorAll('.heart'), //all elements
    oneHeart = document.querySelector('.heart'); //first element

box.style.backgroundColor = 'green';
btn[1].style.borderRadius = '100%';

circle[1].style.backgroundColor = 'black';

for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = 'blue';
}

heart.forEach(function (item, i, hearts) {
    
}

console.log(box);
console.log(btn);
console.log(btn[2]);
console.log(circle);
console.log(circle[2]);