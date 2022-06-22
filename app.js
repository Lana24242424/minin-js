// 1 Переменные
//const firstName = 'Lana'
//const lastName = 'Valeeva'; // string нельзя сделать новые значения
//const age = 26; // Number Дедает так же как и вар. 
//const isProgrammer = true; //boolean

//console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
//alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

//const lastName = prompt('введите фамилию')
//alert(firstName + ' ' + lastName)

//3 операторы
//let currentYear = 2022
//const birthYear = 1992

//const age = currentYear - birthYear

//const a = 10;
//const b = 5;
//let c = 32

//c = c + a
//c = c - a
//c = c * a
//c = c / a
//c += a
//c -= a
//c *= a
//c /= a
//console.log(a + b)
//console.log(a - b)
//console.log(a * b)
//console.log(a / b)
//console.log(currentYear++)
//console.log(currentYear)
//console.log(c)

//типы данных
//const firstName = 'Lana'
//const age = 26;
//const isProgrammer = true; 
//let x
//console.log(typeof firstName)
//console.log(typeof age)
//console.log(typeof isProgrammer)
//console.log(null)


//5 приоритет операторов
//const fullAge = 30
//const birthYear = 1992
//const currentYear = 2022

// > < >= <=
//const isFullAge = (currentYear - birthYear) >= fullAge
//console.log(isFullAge)

// 6 условные операторы
//const courseStatus = 'fail'// ready, fail, pending

//if (courseStatus === 'ready') {
//console.log('Курс готов и его можно проходить')
//} else if (courseStatus === 'pending') {
//    console.log('курс находится в процессе разработке')
//} else {
//    console.log('Курс не получился')
//}

//const isReady = false

//if (isReady === true) {
//   console.log('Все готово')
//} else {
//    console.log('Все не готово')
//}

// тернарное выражение
//isReady ? console.log('Все готово'): console.log('Все не готово')

//const num1 = 42 //number
//const num2 = '42'//string

//console.log(num1 === num2)

// 7 булевая логика
// 8 Функции

//function calculateAge(year) {
//    return 2022 - year
//}

//const myAge = calculateAge(1992)
//console.log(myAge)

//console.log(calculateAge(1992))
//console.log(calculateAge(2019))
//console.log(calculateAge(1999))

//function logInfoAbout (name, year) {
//const age = calculateAge(year)

//if (age > 0) {
//    console.log('Человек по имени ' + name + ' сейчас имеет возрасть' + age)
//} else {
//    console.log('Вообще-то это уже будущее')
//}

//console.log('Человек по имени ' + name + ' сейчас имеет возрасть' + age)
//}

//logInfoAbout('Lana', 1992)
//logInfoAbout('Lana', 2023)

// 9 Массивы arrays
//const cars = ['mazda', 'mersedes', 'ford'] // это правильный вариант
//const cars = new Array('mazda', 'mersedes', 'ford')
//console.log(cars.length)
//console.log(cars[1])
//console.log(cars[0])
//console.log(cars[2])

//cars[0] = 'Porsche'
//cars[3] = 'Mazda'
//console.log(cars)

// 10 циклы массивов
//const cars = ['mazda', 'mersedes', 'ford', 'porsche']

//for (let i = 0; i < cars.length; i++) {
//    const car = cars[i]
////    console.log(car )
}

//for (let car of cars) { // то, что выше можно написать проще как тут
//    console.log(car)
//}

//11. объекты
// grouping
const person = {
    firstName: 'Lana',
    lastName: 'Valeeva',
    year: 1992,
    languages: ['ru', 'en', 'de'],
    hasWife: false,
    greet: function() {
        console.log('greet from person')
    }
}

console.log(person.firstName)
person.greet()