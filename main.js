// // 1
// function redp() {
//     var p = document.getElementsByTagName('p');
//     for (var i = 0; i < p.length; i++) {
//         p[i].style.color = 'red';
//     }
// }
// redp();

// // 2

// function imgShadow() {
//     var img = document.getElementsByTagName('img');
//     for (var i = 0; i < img.length; i++) {
//         img[i].style.boxShadow = 0 + ' ' + 0 + ' ' + 10 + 'px';
//     }
// }
// imgShadow();

// // 3

// function piCount() {
//     var p = document.getElementsByTagName('p');
//     for (var i = 0; i < p.length; i++) {
//         p[i].insertAdjacentHTML('afterBegin', i + 1 + ') ');
//     }
// }
// piCount();

// 4

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

// // 5

// function mathPow(x, y) {
//     alert('Задача №5: ' + x + " в степени " + y + " = " + Math.pow(x, y));
// }

// mathPow(6, 5);

// 6

// var tag = prompt('Задача №6\nВведите имя <тэга>:', '');

// underlineTag(tag);

// function underlineTag(arg) {
//     var underlineTag = document.getElementsByTagName(arg);
//     var out = '';
//     for (var i = 0; i < underlineTag.length; i++) {
//         underlineTag[i].style.textDecoration = 'underline';
//     }
// }
// ---------------------------------

// // 7 + 8

// function ageX(age) {
//     if (age < 16) {
//         console.log('вы еще молоды');
//     } else if (age >= 16) {
//         console.log('добро пожаловать');
//     } else {
//         console.log('Введите возраст');
//     }
// }

// ageX('17');

// // 9

// var arr = [3, 6, 9, 3, 1, 6, 33, 67, 12, 4, 55];

// function arrLength(arr) {

//     if (arr.length > 0) {

//         console.log(arr.length);
//     } else {
//         console.log('Передайте аргумент в функцию');
//     }
// }

// arrLength(arr);

// // 10

// var num = prompt('Задача №10\nВведите число:', '');

// function nums() {
//     if (num > 10) {
//         return num * num;
//     } else if (num < 7) {
//         return 'Число меньше 7';
//     } else if (num >= 7 && num <= 10) {
//         return num;
//     }
// }

// alert('Задача №10\nОтвет: ' + nums());

// // 11 Угадай число(push - добавлям элементы в конец массива)

// document.getElementById('lucky-btn').onclick = luckyFoo;
// var randomNum = Math.ceil(Math.random() * 10);
// // console.log(randomNum);

// var attempt = 3; // кол-во попыток

// function luckyFoo() {
//     var input = document.getElementById('in').value;

//     attempt--;

//     if (attempt > 0) {
//         if (input == randomNum && input != '') {
//             alert('Вы угадали, загаданное число ' + randomNum);
//             location.reload();
//         } else if (input > randomNum && input != '') {
//             console.log('Введеное число больше');
//         } else if (input < randomNum && input != '') {
//             console.log('Введеное число меньше');
//         } else {
//             alert('Вы ничего не ввели');
//         }
//     } else {
//         alert('Вы проиграли');
//         location.reload();
//     }

//     // console.log('attempt ' + attempt);

//     document.getElementById('lucky').innerHTML = attempt;


// } //end of luckyFoo