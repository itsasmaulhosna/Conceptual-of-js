// const p = document.getElementsByClassName('text');
const pera = document.querySelector('#heading');
pera.innerText = 'hello';
const p = document.querySelectorAll('.text');
// console.log((p[0].innerText = 'okey'));
p[0].classList.add('hidden');
const handel = document
  .getElementById('btn')
  .addEventListener('click', function () {
    p[0].classList.remove('hidden');
  });
// parent
const container = document.getElementById('container');
console.log(container);
// child
const div = document.createElement('div');
div.innerHTML = `
        <p>This is a div</p>
      `;
// give element

container.appendChild(div);

let arr = [1, 5, 8, 5, 8, 9];
const findMethod = arr.find((i) => i == 2);
console.log(findMethod);
