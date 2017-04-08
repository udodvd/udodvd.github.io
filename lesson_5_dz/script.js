

do{
    var num1 = +prompt('Введите первое число!!');

    if(isNaN(num1) || num1 === "" || num1 === " " || num1 == false){
        alert('Я же просил число!!!');
    }
}
while (isNaN(num1) || num1 === "" || num1 === " " || num1 == false)
console.log(num1);
do {
    var numOperation = prompt('Введите операцию / * + -');
    if(numOperation != "-" && numOperation != "/" && numOperation != "+" && numOperation != "*"){
        alert('Operation  Unknow');
    }
    console.log(typeof numOperation);
}
while (numOperation != "-" && numOperation != "/" && numOperation != "+" && numOperation != "*");
console.log(numOperation);
do {

    var num2 = +prompt('Введите Второе число!!');
    if(num2 == 0){
        alert('Дружище у тебя что в школе была двойка по математике!! \n на 0 делить нелязя!!!');
    } else if(isNaN(num2) || num2 === "" || num2 === " " || num2 == false){
        alert('Я же просил число!!!')
    };
}
while (isNaN(num2) || num2 === "" || num2 === " " || num2 == false || num2 == 0);

console.log(num2);
var result = eval(num1 + numOperation + num2);
alert(result);
document.getElementById("res").innerText = num1 +" "+ numOperation +" "+ num2 +" = "+ result;
console.log(result);
