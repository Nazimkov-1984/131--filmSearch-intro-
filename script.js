// отримання елементів зі сторінки (index.html)
// querySelector('selector') - може шукати як в документі, в окремому елементі. 

const inputFilm = document.querySelector('input')
const button = document.querySelector('button')
const card = document.querySelector('.card')

// background-color - зміна стилей через JavaScript
// button.style.backgroundColor = 'red'
// inputFilm.style.backgroundColor = 'red'

// створення інтерактивних елементів

// це додати обробник подій  (додати Прослуховувач Подій)
// function functionClick () {
//     card.style.opacity = 1
    
// }
// function functionLeave () {
//     card.style.opacity = 0
    
// }
// button.addEventListener('mouseenter', functionClick)
// button.addEventListener('mouseleave', functionLeave)

function printFilmName () {
    const film = inputFilm.value
    console.log('Назва фільму який ми шукаємо - ', film)
    fetch(`http://www.omdbapi.com/?r=json&s=${film}&apikey=2a7d7e9f&`)
        .then(response => response.json())
        .then(json => {
            console.log('Результати пошуку - ', json)
        })
}

button.addEventListener('click', printFilmName)

// два типу данних - це об'єкти та масиви (number, string, boolean/true, false)
// array та object