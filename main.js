// Задача 1. Напишите функцию, которая выделяет все параграфы на
// странице красным цветом фона.
function redp() {
    var p = document.getElementsByTagName('p');
    for (var i = 0; i < p.length; i++) {
        p[i].style.color = 'red';
    }
}
redp();

// Задача 2. Напишите функцию, которая добавляет тень всем
// изображениям на странице.

function imgShadow() {
    var img = document.getElementsByTagName('img');
    for (var i = 0; i < img.length; i++) {
        img[i].style.boxShadow = 0 + ' ' + 0 + ' ' + 10 + 'px';
    }
}
imgShadow();

// Задача 3. Напишите функцию, которая нумерует все абзацы
// страницы и добавляет номер перед текстом абзацев.

function piCount() {
    var p = document.getElementsByTagName('p');
    for (var i = 0; i < p.length; i++) {
        p[i].insertAdjacentHTML('afterBegin', i + 1 + ') ');
    }
}
piCount();

// Задача 4. Используя глобальную переменную напишите функцию,
// которая будет подсчитывать количество нажатий на кнопки.
// Кнопок – две, реализуйте их в HTML.

var clickCount = 0; // Глобальная переменная

var btnOne = document.getElementById('btnOne').onclick = pushBtn;
var btnTwo = document.getElementById('btnTwo').onclick = pushBtn;

function pushBtn() {
    console.log(this.id);
    if (this) {
        clickCount++;
        document.getElementById('btnOneOut').innerHTML = clickCount;
    } else {
        clickCount++;
        document.getElementById('btnTwoOut').innerHTML = clickCount;
    }
}

// Задача 5. Создайте функцию, которая получает два параметра – число
// и степень числа. Используя Math.Pow внутри функции, возведите
// число в степень и выведите с помощью alert.

function mathPow(x, y) {
    alert('Задача №5: ' + x + " в степени " + y + " = " + Math.pow(x, y));
}

mathPow(6, 5);

// Задача 6. Создайте функцию, которая принимает один
// параметр – строку, которая содержит тег. При вызове функции,
// она подчеркивает все элементы на странице с данным тегом.
// Т.е. если пользователь вызвал функцию с параметром ‘p’ – то
// подчеркиваются абзацы.

var tag = prompt('Задача №6\nВведите имя <тэга>:', '');

underlineTag(tag);

function underlineTag(arg) {
    var underlineTag = document.getElementsByTagName(arg);
    var out = '';
    for (var i = 0; i < underlineTag.length; i++) {
        underlineTag[i].style.textDecoration = 'underline';
        underlineTag[i].style.color = 'lime';
    }
}


// Задача 7. Функция принимает параметр - возраст пользователя.
//  Если число больше 16 – то выводим «добро пожаловать», если 
//  меньше – “вы еще молоды”.
//  
// Задача 8. Модифицируйте предыдущий пример – учтите вариант, 
// если пользователь не передал параметр в функцию. В таком случае 
// выведите сообщение – “Введите возраст”. Реализуйте два вида 
// проверки наличия аргумента – проверка на undefined и оператор ||.

function ageX(age) {
    if (age < 16) {
        console.log('вы еще молоды');
    } else if (age >= 16) {
        console.log('добро пожаловать');
    } else {
        console.log('Введите возраст');
    }
}

ageX('17');

// Задача 9. Создайте функцию, которая считает длину массива
//  и возвращает ее в виде числа. Массив в функцию передается
//   как аргумент. Если аргумент не задан – выводится сообщение 
//   об ошибке.

var arr = [3, 6, 9, 3, 1, 6, 33, 67, 12, 4, 55];

function arrLength(arr) {

    if (arr.length > 0) {
        console.log(arr.length);
    } else {
        console.log('Передайте аргумент в функцию');
    }
}

arrLength(arr);

// Задача 10. Пользователь вводит числа. Если число больше 10, 
// то функция возвращает квадрат числа, если меньше 7 – пишет, 
// что число меньше 7. Если 8, 9 – то возвращает соответственно 
// 7 или 8. Реализуйте решение с несколькими return.

var num = prompt('Задача №10\nВведите число:', '');

function nums() {
    if (num > 10) {
        return num * num;
    } else if (num < 7) {
        return 'Число меньше 7';
    } else if (num >= 7 && num <= 10) {
        return num;
    }
}

alert('Задача №10\nОтвет: ' + nums());

// Задача 11. Напишите игру «Угадай число». При загрузке страницы 
// генерируется случайное число от 0 до 10. Пользователю дается 
// три попытки угадать число (число вводиться в input). При каждой 
// проверке выдается подсказка: больше или меньше. При угадывании, 
// завершении числа попыток выдается оповещение. Количество попыток 
// выводиться на экран.

document.getElementById('lucky-btn').onclick = luckyFoo;
var randomNum = Math.ceil(Math.random() * 10);
// console.log(randomNum);

var attempt = 3; // кол-во попыток

function luckyFoo() {
    var input = document.getElementById('in').value;

    attempt--;

    if (attempt > 0) {
        if (input == randomNum && input != '') {
            alert('Вы угадали, загаданное число ' + randomNum);
            location.reload();
        } else if (input > randomNum && input != '') {
            console.log('Введеное число больше');
        } else if (input < randomNum && input != '') {
            console.log('Введеное число меньше');
        } else {
            alert('Вы ничего не ввели');
        }
    } else {
        alert('Вы проиграли');
        location.reload();
    }

    // console.log('attempt ' + attempt);

    document.getElementById('lucky').innerHTML = attempt;


} //end of luckyFoo