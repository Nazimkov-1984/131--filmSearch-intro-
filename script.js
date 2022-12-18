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

function printFilmName() {
    const film = inputFilm.value
    fetch(`http://www.omdbapi.com/?r=json&s=${film}&apikey=2a7d7e9f&`)
        .then(response => response.json())
        .then(json => {
            json.Search.forEach(function (film) {
                // Poster: "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                // Title: "Taxi Driver"
                // Type: "movie"
                // Year: "1976"
                // imdbID: "tt0075314"
                console.log(film.Title)
                const poster = document.querySelector('.card-img-top')
                const title = document.querySelector('.card-title')
                const year = document.querySelector(".card-text")
                const type = document.querySelector('.type')
                poster.src = film.Poster
                poster.alt = film.Title
                title.textContent = film.Title
                year.textContent = film.Year
                type.textContent = film.Type
            })
        })
}

button.addEventListener('click', printFilmName)

// два типу данних - це об'єкти та масиви (number, string, boolean - /true, false)
// array та object
//МАСИВИ 

const students131 = "Даніл Ілля Аня Сергій Вова Богдан"

const studentsNames = ["Даніл", "Ілля", "Аня", "Сергій", 'Вова', "Богдан"]

// кожен елемент масиву має свій індекс елементу який починаєтся з нуля

let student = ['Даніл', 16, 4, true, false, undefined, ['html', 'css', 'js']]

// перебор массиву forEach()

studentsNames.forEach(function (element, ) {
    // console.log(element)
})
// властивість массиву - це те що ми можемо отримати його довжину (length)

// console.log('Всього в групі - ', studentsNames.length, "студентів.")

// об'єкти - на відміну від масивів кожний елемент в об'єті має своє ім'я
// всі данні в об'єкті зберігаются в вигляді пари "ключ":"значення"

const oneStudent = {
    name: "Даніл",
    age: 16,
    months: 4,
    isHomeworkDone: true, //чиВиконаніДомашки?
    isFinalProjectDone: false, // чиВиконанийФінальнийПроект?
    petName: undefined,
    technologies: ['html', 'css', 'js']
}

// console.log(oneStudent.name)