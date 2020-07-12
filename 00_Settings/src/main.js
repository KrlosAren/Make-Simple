
const button = document.querySelector('.settings')
const dropMenu = document.querySelector('.drop__menu')
const arrow = document.querySelector('.button')

button.onclick = (e) => {
  e.preventDefault();
  dropMenu.classList.toggle('show__menu')
  arrow.classList.toggle('after')
}