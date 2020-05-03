let box = document.getElementById('box'), // by id
    btn = document.getElementsByTagName('button'), // by tag
    circle = document.getElementsByClassName('circle'), //by class
    heart = document.querySelectorAll('.heart'), //all elements
    oneHeart = document.querySelector('.heart'), //first element
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'green';
btn[1].style.borderRadius = '100%';

circle[1].style.backgroundColor = 'black';

for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = 'blue';
}

heart.forEach(function (item, i, hearts) {
    item.style.backgroundColor = 'black';

});

let div = document.createElement('div'),
    text = document.createTextNode('Here was me');



div.classList.add('black');
//wrapper.appendChild(div);

document.body.insertBefore(div, circle[1]); // insert before element
document.body.removeChild(btn[2]); //remove second button

document.body.replaceChild(btn[2], circle[2]);


div.innerHTML = '<h4> Hello, World!</h4>';
