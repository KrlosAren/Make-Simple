
import '../src/styles/main.css'

const btnSearch = document.getElementById('btnSearch')
const inputSearch = document.querySelector('.search__input')
const searchContainer = document.querySelector('.search__container')


btnSearch.onclick = () => {
  inputSearch.style.animationName = 'size'
  searchContainer.style.animationName = 'move'

  searchContainer.addEventListener('animationend', (eventTwo) => {
    if (eventTwo.animationName === 'move') {
      inputSearch.style.animationName = 'resize'
    }
  })
}
