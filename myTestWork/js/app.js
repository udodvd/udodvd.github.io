var app = angular.module('myApp', [])


app.controller('mainCtrl', ['$scope',
		function ($scope){

		$scope.editcar = {}
		$scope.rightpanelshow = true
		$scope.carData = [
			{
				vehicle_ID: 8,
				name: 'Ford',
				model: 'Mondeo',
				Year: 2001,
				Type: 'Sedan'
			},
			{
				vehicle_ID: 1,
				name: 'Fiat',
				model: 'Multipa',
				Year: 2012,
				Type: 'Minivan'
			},
			{
				vehicle_ID: 3,
				name: 'Renault',
				model: 'Traffic',
				Year: 2017,
				Type: 'Bus'
			},
			{
				vehicle_ID: 2,
				name: 'Buick',
				model: 'Roadmaster',
				Year: 2005,
				Type: 'Sedan'
			},
			{
				vehicle_ID: 4,
				name: 'Nissan',
				model: 'Note',
				Year: 2006,
				Type: 'Minivan'
			},
			{
				vehicle_ID: 7,
				name: 'BMW',
				model: '750',
				Year: 1998,
				Type: 'Sedan'
			},
			{
				vehicle_ID: 6,
				name: 'Nissan',
				model: 'Cubstar',
				Year: 2012,
				Type: 'Bus'
			}
	];

		$scope.selectCar = id => {
			$scope.carData.forEach(item => {
				if (item.vehicle_ID === id) {
					$scope.editcar.vehicle_ID = item.vehicle_ID
					$scope.editcar.name = item.name
					$scope.editcar.model = item.model
					$scope.editcar.Year = item.Year
					$scope.editcar.Type = item.Type

				}
			})
		}

		$scope.updateCar = () => {
			$scope.carData.forEach(item => {
				if (item.vehicle_ID === $scope.editcar.vehicle_ID) {
					item.name = $scope.editcar.name
					item.model = $scope.editcar.model
					item.Year = $scope.editcar.Year
					item.Type = $scope.editcar.Type
				}
			})
		}

		$scope.addCar = () => {
			$scope.newcar.vehicle_ID = $scope.carData.length + 1
			
			$scope.carData.push($scope.newcar)
			$scope.newcar={}
		}
		
		$scope.cancel=()=>{
			$scope.newcar={}
		}
		
		$scope.showPanel=(action)=>{
			
				
			if (action ==='add'){
				$scope.addcarshow = true
				$scope.rightpanelshow = false
				$scope.editcarshow = false
			} 
			if (action ==='info'){
				$scope.addcarshow = false
				$scope.rightpanelshow = false
				$scope.editcarshow = true
			}
			if (action ==='closeAll'){
				$scope.addcarshow = false
				$scope.rightpanelshow = false
				$scope.editcarshow = false
			}
			
		}

		// filtering
		$scope.sortType = 'name';
		$scope.sortReverse = false;
		$scope.searchFilter = '';
}]);

$(document).ready(function() {
	$('.nav li:first').tab('show') // Select first tab
	$('#myTabs .tab-pane:first').addClass('active')
});