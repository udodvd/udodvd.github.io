angular.module("exampleApp", [])
.controller("defaultCtrl", function ($scope) {

    // текущее педставление
    $scope.currentView = "table";

    // получение всех данных из модели
    $scope.refresh = function () {
        $scope.items = [{ VehicleID: 0, name: "Toyota", Model: "Rav-4", Year: 2016 , Type :"Minivan" }, { VehicleID: 0, name: "Mazda", Model: "6-Sport", Year: 2014 , Type :"Sedan" }, { VehicleID: 0, name: "Ford", Model: "Mustang-GT", Year: 2014 , Type :"Cope" }];
    }

    // создание нового элемента
    $scope.create = function (item) {
        $scope.items.push(item);
        $scope.currentView = "table"
    }

    // обновление элемента
    $scope.update = function (item) {
        for (var i = 0; i < $scope.items.length; i++) {
            if ($scope.items[i].id == item.id) {
                $scope.items[i] = item;
                break;
            }
        }
        $scope.currentView = "table"
    }

    // удаление элемента из модели
    $scope.delete = function (item) {
        $scope.items.splice($scope.items.indexOf(item), 1);
    }

    // редеактирование существующего или создание нового элемента
    $scope.editOrCreate = function (item) {
        $scope.currentItem = item ? angular.copy(item) : {};
        $scope.currentView = "edit";
    }

    // сохранение изменений
    $scope.saveEdit = function (item) {
        // Если у элемента есть свойство id выполняем редактирование
        // В данной реализации новые элементы не получают свойство id поэтому редактировать их невозможно (будет исправленно в слудующих примерах)
        if (angular.isDefined(item.id)) {
            $scope.update(item);
        } else {
            $scope.create(item);
        }
    }

    // отмена изменений и возврат в представление table
    $scope.cancelEdit = function () {
        $scope.currentItem = {};
        $scope.currentView = "table";
    }

    $scope.refresh();
});