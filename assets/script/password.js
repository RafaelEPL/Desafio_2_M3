const A = document.querySelector('#A');
const B = document.querySelector('#B');
const C = document.querySelector('#C');

const mensaje = document.querySelector('.mensaje')

function verificarPassword() {
  let password = A.value + B.value + C.value;
  if (password === '123') {
    mensaje.innerText = 'Password 1 correcto';
    mensaje.classList.add('ok');
    mensaje.classList.remove('error');
  } else if (password === '321') {
    mensaje.innerText = 'Password 2 correcto';
    mensaje.classList.add('ok');
    mensaje.classList.remove('error');
  } else {
    mensaje.innerText = 'Password incorrecto';
    mensaje.classList.remove('ok');
    mensaje.classList.add('error');
  }
}