
import '../src/styles/main.css'

const btnSearch = document.getElementById('btnSearch')
const inputSearch = document.querySelector('.search__input')
const searchContainer = document.querySelector('.search__container')

btnSearch.onclick = () => {
  inputSearch.classList.toggle('active')
  btnSearch.classList.toggle('active')
  
}

inputSearch.addEventListener('repeatEvent', () => {
  console.log('hola')
})
