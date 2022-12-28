// отримання елементів зі сторінки (index.html)
// querySelector('selector') - може шукати як в документі, в окремому елементі. 

const inputFilm = document.querySelector('input')
const button = document.querySelector('button')
const card = document.querySelector('.card')

setInterval(function() {
    if(inputFilm.value !== '') {
        button.disabled = false
    } else {
        button.disabled = true
    }
}, 500)

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

function clearResults () {
const searchResults = document.querySelector('.searchResults')
const cards = document.querySelectorAll('.card')
if(cards) {
    cards.forEach(function(card) {
        searchResults.removeChild(card)
    })
}
}

function createCard (src,title, year, type) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.style.width = '18rem'
    const image = document.createElement('img')
    image.classList.add("card-img-top")
    const cardBody = document.createElement('div')
    cardBody.classList.add("card-body")
    const cardTitle = document.createElement('h3')
    cardTitle.classList.add("card-title")
    const cardText = document.createElement('h3')
    cardText.classList.add("card-text")
    const typeFilmWrapper = document.createElement('div')
    typeFilmWrapper.classList.add('type-film')
    const typeText = document.createElement('p')
    typeText.classList.add('card-text')
    typeText.textContent = 'Type'
    const filmType = document.createElement('p')
    filmType.classList.add('card-text')
    filmType.classList.add('type')
    const button = document.createElement('a')
    button.classList.add('btn')
    button.classList.add('btn-primary')
    button.textContent = 'Learn more'
    // додаэмо елементи в правильному порядку
    card.appendChild(image)
    card.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(typeFilmWrapper)
    cardBody.appendChild(button)
    typeFilmWrapper.appendChild(typeText)
    typeFilmWrapper.appendChild(filmType)
    const searchResults = document.querySelector('.searchResults')
    searchResults.appendChild(card)
    // наповнення картки контентом
    image.src = src
    cardTitle.textContent = title
    cardText.textContent = year
    filmType.textContent = type
}

function onButtonClick () {
    clearResults()
    const film = inputFilm.value
    fetch(`http://www.omdbapi.com/?r=json&s=${film}&apikey=2a7d7e9f&`)
        .then(response => response.json())
        .then(json => {
            if(json.Search) {
                json.Search.forEach(function (film) {
                createCard(film.Poster, film.Title, film.Year, film.Type)
            })
            } else {
                alert('Movie not found!')
            }
        })
}

button.addEventListener('click', onButtonClick)

// два типу данних - це об'єкти та масиви (number, string, boolean - /true, false)
// array та object
//МАСИВИ 

// const students131 = "Даніл Ілля Аня Сергій Вова Богдан"

// const studentsNames = ["Даніл", "Ілля", "Аня", "Сергій", 'Вова', "Богдан"]

// кожен елемент масиву має свій індекс елементу який починаєтся з нуля

// let student = ['Даніл', 16, 4, true, false, undefined, ['html', 'css', 'js']]

// перебор массиву forEach()

// studentsNames.forEach(function (element, ) {
    // console.log(element)
// })
// властивість массиву - це те що ми можемо отримати його довжину (length)

// console.log('Всього в групі - ', studentsNames.length, "студентів.")

// об'єкти - на відміну від масивів кожний елемент в об'єті має своє ім'я
// всі данні в об'єкті зберігаются в вигляді пари "ключ":"значення"

// const oneStudent = {
//     name: "Даніл",
//     age: 16,
//     months: 4,
//     isHomeworkDone: true, //чиВиконаніДомашки?
//     isFinalProjectDone: false, // чиВиконанийФінальнийПроект?
//     petName: undefined,
//     technologies: ['html', 'css', 'js']
// }

// створення елементів за допомогою JS 

// document.createElement - функція для створення елементів
// const newElement = document.createElement('div')
// const newImage = document.createElement('img')

// appendChild - функція для додавання елементів в різні контейнери 
// container.appendChild(newElement)- умовна структура для додавання нового елемента

// const searchResults =  document.querySelector('.searchResults')

// searchResults.appendChild(newElement)
// searchResults.appendChild(newImage)

//  <!-- <div class="card" style="width: 18rem;">
//         <img src="" class="card-img-top" alt="">
//         <div class="card-body">
//             <h3 class="card-title"></h3>
//             <p class="card-text"></p>
//             <div class="type-film">
//                 <p class="card-text">Type:  </p>
//                 <p class="card-text type"></p> 
//             </div>
//             <a href="#" class="btn btn-primary">Learn more</a>
//         </div>
//     </div> -->

// classList.toggle('my-class')  - якщо в елемента нема такого классу: він додається, 
// якщо в елемента є такий класс: то він видаляється


