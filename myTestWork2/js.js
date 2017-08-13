let millisec = 0;
let second = 0;
let minutes = 0;
let myTimerSpan;
function mytimer() {
    millisec++;
    if(millisec < 100){
        millisec = "0" + Number(millisec);
    }
    if(millisec == 1000){
        second++;
        millisec = 0;
        
    }
    if(second<10){
            second = "0" + Number(second);
        }
    if(second == 60){
        minutes++;
        second = 0;
    }
    if(minutes<10){
            minutes = "0" + +minutes;
        }
    
 myTimerSpan = document.querySelector('.seconds');
    myTimerSpan.innerHTML = "<b>" + minutes + ":" + second + ":" + millisec +"</b>";
}
   
    let SplittButton = document.querySelector('#Split');
SplittButton.addEventListener('click',function(){
    $(myTimerSpan).clone().appendTo('.splitRes').wrap("<div></div>")
    
})

let myStopTimer;

let StartButton = document.querySelector('#Start');
StartButton.addEventListener('click',function(){
    
    if($(this).text() === 'Start'){
        myStopTimer = setInterval(mytimer,0.5);
        $(this).text('Stop');
        }
    if($(this).text()=== 'Stop'){
            $(this).on('click',function(){
                clearInterval(myStopTimer);
                 $(this).text('Start');
            });
    }
});

let myRestButton = document.querySelector('#Rest');
myRestButton.addEventListener('click',function(){
    clearInterval(myStopTimer);

    millisec = '0' + 0;
    second = '0' + 0;
    minutes = '0' + 0;
    
//    setTimeout(clearrMyInterval,1)
});

// function calculate(arguments){
// //    this.arguments
//     console.log("My name is - " + this.name +" "+ this.serName + " and  i have a - "+ (a + b) + " Dollars");
// }
// var mySelf = {
//   name : "Fedor",
//     serName :"Gavnukof"
// }
// //calculate.call(mySelf,5,3);
// var arr = [100,23,12,23]
// calculate.apply(mySelf, arr);

//function animal(newName, newColor){
//    var self = this;
//    newName = newName.toUpperCase();
//    self.name = newName;
//    self.color = newColor;
//    self.noise = function(){
//        console.log('This is Publick method');
//        self._noisePrivat();
//    }
//    self._noisePrivat = function(){
//        alert("Hello , I'm "+ self.name);
//        console.log('This is Privat method');
//    }
//}
//var dog = new animal('Jack', 'White');
//
//console.log(dog);
//
//dog._noisePrivat();
//var foof = ;
//var a = {};
//var b = [];
//
//var c = new Object;
//var d = new Array;
//var str = new String('Mystr');
//console.log('a',a);
//console.log('b',b);
//console.log('c',c);
//console.log('d',d);
//console.log('str',str);

//function myFoo(){
//    console.log('Hello World')
//}
//setTimeout(myFoo,5000);
//var i = 0;
//function myFoo2(){
//    console.log('Hello World -> '+i);
//    i++;
//    if(i === 10){
//        clearInterval(myTimer);
//    }
//}
//var myTimer = setInterval(myFoo2,1000);
//var myButton = document.querySelector('button');
//myButton.addEventListener('click',function(){
//    clearInterval(myTimer);
//})