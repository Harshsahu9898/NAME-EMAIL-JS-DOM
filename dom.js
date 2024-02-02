// console.log(window);

// alert(1);
// single element selectors
// console.log(document.getElementById('my-form'));//to get any form id or any context through id in the html format
// const form  = (document.getElementById('my-form'));
// console.log(form);
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));//if there are more than 1 h1 element it will select only one h1
// multiple element selectors
// console.log(document.querySelectorAll('.item'));//this is used for multiple list nodes or selectors
// console.log(document.getElementsByClassName('item'));//not mostly used
// console.log(document.getElementsByTagName('li'));

// const items  = document.querySelectorAll('.item');

// items.forEach((item)=> console.log(item));
//// to loop through all of the items we go for the above one
// const ul = document.querySelector('.items');

// ul.remove();//to remove all the lists
// ul.lastElementChild.remove();//to remove any one of the lists
// ul.firstElementChild.textContent='harsh';//edit the first list to harsh

// ul.children[1].innerText = 'Tripti';//to rename second element
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';//to rename third element by html

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';//to change the color dynamically

// const btn = document.querySelector('.btn');

// btn.addEventListener('click',(e) => {
//     e.preventDefault();
//     // console.log(e.target.className);//to get the class name
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        // console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // clear fields
        nameInput.value = '';
        emailInput.value = '';
    }

}