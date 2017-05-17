var model = {
    peoples:[
        // {nameF:"Вася",nameS:"Пупкин", id:"1",age:"32"},
        // {nameF:"Петя",nameS:"Петров", id:"2",age:"24"},
        // {nameF:"Женя",nameS:"Иванов", id:"3",age:"14"}
        ]
};

var app = angular.module('myApp',[]);
app.controller('SaveCtrl',function ($scope) {
    $scope.data = model;
    var myId = 0;
    $scope.addNewPeople = function () {
        myId++;
        $scope.data.peoples.push({
            id:$scope.data.peoples.length,
            nameF:$scope.firstName,
            nameS: $scope.lastName,
            age:$scope.age
        });
        $scope.firstName = '';
        $scope.lastName = '';
        $scope.age = '';

        // $scope.getGender = function (getGender) {
        //     return getGender ? man : woman;
        // }
    }
});
var myDelBtn = document.getElementById('myPeople');
    myDelBtn.addEventListener('click',function (e) {
    console.log('e.target', e.target);
    var myDelBtn = document.querySelector('btn-danger');
    console.log(myDelBtn);

})


