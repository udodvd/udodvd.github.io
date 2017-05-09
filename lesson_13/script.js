var myImg = document.querySelectorAll('li img');
var myBigImg = document.getElementsByClassName('big-picture')[0];
console.log(myBigImg);
for(var key in myImg){
    if(!myImg.hasOwnProperty(key)) {
        continue;
    }
    console.log("this.key - "+ key + " :myImg[key]- " +myImg[key]);

    this.myImg[key].onclick = function () {
        this.style.cssText = "border: 3px solid red"
        var that = this;
        console.log(this);
        var CurImg = that.cloneNode(true);
        myBigImg.replaceChild(CurImg,myBigImg.childNodes[0]);
        myBigImg.removeChild(myBigImg.childNodes[1]);
    }
    this.myImg[key].onmouseout = function () {
        this.style.cssText = "border: 3px solid blue"
    }
}
console.log(myImg);

// (function () {
// var delay = 100,
//     i = 0,
//     startTimer = function (pixels) {
//     var elem = document.getElementById('egg'),
//       bottom = elem.offsetTop;
//     console.log(bottom);
// if((pixels > 0 && bottom > 150) ||(pixels < 0 && bottom > 50)){
//     clearInterval(timer);
//     var timer = setInterval(function () {
//         startTimer(pixels * -1);
//     },delay);
// }
//
//       // if(i < 1000){
//       //     // setTimeout(startTimer,delay);
//       //
//       // }else {
//       //     clearInterval(timer)
//       // }
//         elem.style.top = bottom + pixels + 'px';
//         i++;
//     };
// var timer = setInterval(function () {
//     startTimer(150)
// },delay);
// })();


// var arr = [
//     {
//         url: 'http://tobyho.com/2011/01/28/checking-types-in-javascript/',
//         description: 'How to detect type of object. typeof, instanceof',
//         tags: ['object', 'types']
//     }, {
//         url: 'http://bonsaiden.github.io/JavaScript-Garden/#types',
//         description: 'Type detection',
//         tags: ['object', 'types']
//     }, {
//         url: 'http://www.jspatterns.com/classical-inheritance/',
//         description: 'Classical inheritance example, build on top of prototyping.',
//         tags: ['object', 'inheritance', 'prototype']
//     }, {
//         url: 'http://dmitrysoshnikov.com/ecmascript/javascript-the-core/',
//         description: 'Very detailed description on how javascript core works. ',
//         tags: ['core', 'javascript']
//     }, {
//         url: 'http://lostechies.com/jimmybogard/2009/01/20/javascript-decorator-pattern/',
//         description: 'Decorating functions. This is the way to change function behavior, not touching its implementation',
//         tags: ['inheritance', 'function']
//     }, {
//         url: 'http://dmitrysoshnikov.com/ecmascript/chapter-5-functions/',
//         description: 'Functions in details',
//         tags: ['function']
//     }, {
//         url: 'http://dmitrysoshnikov.com/ecmascript/chapter-4-scope-chain/',
//         description: 'Scope chain',
//         tags: ['function', 'variable', 'closure']
//     }, {
//         url: 'http://dmitrysoshnikov.com/ecmascript/chapter-3-this/',
//         description: 'What is "this" in functions',
//         tags: ['function', 'inheritance']
//     }
// ];
// var myClickUl = document.getElementById('myUl');
// console.log(myClickUl);
// myClickUl.addEventListener("click", function(e){
//     e.preventDefault();
//     arr.reverse();
// });
// for( var key in arr){
//     console.log(key , 'in ',arr[key].url);
//
//     var myUl = document.getElementById('myUl');
//     var myElemList = document.createElement('li')
//     myElemList.innerHTML = '<a href="'+arr[key].url+'">'+arr[key].description +'</a>';
//     myUl.appendChild(myElemList);
//     console.log(myElemList);
// }

// var computedStyle = getComputedStyle(document.body);
// var computedStyle2 = getComputedStyle(document.body ,::after);
// console.log(computedStyle.background);
//  console.log(computedStyle2.border);
// var counterModul = (function () {
// var counter = 0,
// instance;
// var getCounter = function () {
//     return counter;
// }
//     var increseCountre = function () {
//         counter++;
//     }
//     var createInstance = function () {
//         return{
//             getCounter :getCounter,
//             increseCountre: increseCountre
//         }
//     }
//     return {
//         getInstance: function () {
//             return instance ||(instance = createInstance());
//         }
//     }
//
// }());
// 'use strict'
// var human = {
//     name:'Alexa',
//     getName : function () {
//         console.log(this);
//     }
// }
// human.getName();
// var Mail = function () {
//     this.latter = "this is my World";
//     console.log(this);
// }
//
// Mail.prototype.getLetter = function () {
//     console.log(this);
// }
// var mail = new Mail();
// var mail2 = new Mail();
// mail.getLetter();
// $('.button').click(human.getName.bind(human));
// var sport = {
//     tournament:'The masters',
//     players:[{
//         name:"wood",
//         age:37
//     },
//         {name:'Mike',
//          age:42}
//     ],
//     show: function () {
//         var self = this;
//         this.players.forEach(function (person) {
//             console.log(person, 'and' , self)
//         })
//     }
// }
// sport.show;
// console.log(sport.show());
// var animal = {
//     eats: 'I m EATING CARROTS',
//     fuck:'Im fucking Every Day!!'
// };
//
// function Rabbit(name) {
//     this.name = name;
// }
//
// Rabbit.prototype = animal;
//
//
// var rabbit = new Rabbit("Кроль"); //  rabbit.__proto__ == animal
// Object.create(Rabbit, __proto__);
//
// console.log( rabbit ); // true
// var animal = {
//     eats: 'I m EATING CARROTS',
//     fuck:'Im fucking Every Day!!'
// };
// var myUrl = document.URL;
// console.log(myUrl);
// function Rabbit(name) {
//     this.name = name;
//     this.__proto__ = animal;
// }
// var rabbit = Object.create(null);
// // var rabbit = new Rabbit("Кроль");
// // if(rabbit.hasOwnProperty('name')){
// //
// // }
// console.log( rabbit ); // true, из прототипа
// var head = {
//     glasses: 1
// };
//
// var table = {
//     pen: 3
// };
// table.__proto__ = head;
// var bed = {
//     sheet: 1,
//     pillow: 2
// };
// bed.__proto__ = table;
//
// var pockets = {
//     money: 2000
// };
// pockets.__proto__ = head;
// console.log(pockets.pen , 'pockets')
// console.log(bed.glasses, 'bed.glasses')
// console.log(table.money, 'table.money')
// var animal = {
//     eats: true
// };
//
// var rabbit = {
//     jumps: true,
//     papist: function () {
//         console.log('OO EEE I M PISIN on YOu')
//     },
//     jumps: true,
//     __proto__: animal
// };
// for (var key in rabbit) {
//     console.log( 'in hasOwn' + key + " = " + rabbit[key] );
// }
// for (var key in rabbit) {
//     if (!rabbit.hasOwnProperty(key)) continue; // пропустить "не свои" свойства
//     console.log( "NO hasOwn"+key + " = " + rabbit[key] ); // выводит только "jumps"
// }
// в rabbit можно найти оба свойства
// alert( rabbit.jumps ); // true
// alert( rabbit.eats ); // true
// var a = {
//     x: 10,
//     calculate: function (z) {
//         return this.x + this.y + z;
//     }
// };
//
// var b = {
//     y: 20,
//     __proto__: a
// };
//
// var c = {
//     y: 30,
//     __proto__: a
// };

// // вызываем унаследованный метод
// console.log(b.calculate(30)); // 60
// console.log(c.calculate(40));
//
// var foo = {
//     x: 10,
//     y: 20
// };
//
// foo.prototype;
// console.log(foo.x);
// window.hello = 'hello';
// console.log(this.hello);
// console.log(hello);
//
// var helloWorld = function () {
//     console.log(this);
// }
// helloWorld();
// var human = {
//     name:'Alexa',
//     getName : function () {
//         console.log(this);
//     }
// }
// human.getName();
// var Mail = function () {
//     this.latter = "this is my World";
//     console.log(this);
// }
//
// Mail.prototype.getLetter = function () {
//     console.log(this);
// }
// var mail = new Mail();
// var mail2 = new Mail();
// mail.getLetter();
//
// $('button').click(function () {
// human.getName();
// });


// function showName(name, surName) {
//     var fullName = name+ " " + surName;
//     return fullName;
// }
// var ivanName= "Ivan";
// var ivanSurName= "Ivanovich";
// var ivanFullName = showName(ivanName, ivanSurName);
// console.log(showName(ivanName,ivanSurName));
// var lenaName = 'Lena';
// var LenaSerName = "Ivanovna";
// var lenaFullName = showName(lenaName, LenaSerName);
// console.log(lenaFullName);
// var extend = function (target) {
//     if(!arguments[1]){
//         return;
//     }
//     for(var i = 1; i < arguments.length; i++){
//         var source = arguments[i];
//         for(var prop in source){
//             if(!target[prop] && source.hasOwnProperty(prop)){
//                 target[prop] = source[prop];
//             }
//         }
//     }
// }
// var Track = function (name) {
//     this.name = name;
// }
// // Track.prototype.getName = function () {
// //     return this.name;
// // }
// // Track.prototype.play = function () {
// //     console.log(this.name + " Started playing");
// // }
// var PlayList = function (name) {
//     this.name = name;
// }
// // PlayList.prototype.getName = function () {
// //     return this.name;
// // }
// // PlayList.prototype.play = function () {
// //     console.log(this.name + " Started playing");
// // }
// var nmeMixin = {
//     getName: function () {
//         return this.name;
//     }
// }
// var controlMixin = {
//     play: function () {
//         console.log(this.name + 'started Playing')
//     }
// }
// extend(Track.prototype, nmeMixin,controlMixin);
// extend(PlayList.prototype, nmeMixin,controlMixin);
// var superTrack = new Track('Super track!!!');
// var coolPlayList = new Track('Cool Play List');
// console.log(Track.prototype);
// console.log(PlayList.prototype);
//  console.log(superTrack.getName());
//  console.log(superTrack);
//  console.log(coolPlayList);
// console.log(coolPlayList);
// console.log(coolPlayList.getName());
// console.log(coolPlayList.play());
//     this.waterAmount = 0;
//
//     // физическая константа - удельная теплоёмкость воды для getBoilTime
//     var WATER_HEAT_CAPACITY = 4200;
//
//     // расчёт времени для кипячения
//     function getBoilTime() {
//         return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power; // ошибка!
//     }
//
//     // что делать по окончании процесса
//     function onReady() {
//         alert( 'Кофе готово!' );
//     }
//
//     this.run = function() {
//         setTimeout(onReady, getBoilTime());
//     };
//
// }
//
// var coffeeMachine = new CoffeeMachine(1000);
// coffeeMachine.waterAmount = 200;
//
// coffeeMachine.run();
//
// console.log( 'залито воды: ' + coffeeMachine.waterAmount + ' л' );

// var a = 10;
// (function () {
//     console.log(a)
// })();
// (function () {
//     console.log(a);
//     var a = 15;


// })();
// (function () {
//     var answer = 42;
//     return function inner() {
//         console.log(answer);
//         return answer;
//     }
//     console.log(answer);
// })();
// function greetingName(name) {
//     var text = "Hello " + name;
//     var greet = function () {
//         console.log(text);
//
//     }
//     return greet;
// };
// var a1 = greetingName("Ivan");
// a1();
// var item = document.querySelector('.item');
// item.onclick = activeItem;
//
//  activeItem();
// function activeItem() {
//     console.log(this);
// }