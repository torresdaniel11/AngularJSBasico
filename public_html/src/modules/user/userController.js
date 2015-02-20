(function () {
	var app = angular.module('userModule', []);
 
	app.controller('userController', ['$scope', '$filter',function ($scope, $filter) {
                        
			$scope.user = {};
			$scope.showForm = false;
			this.showForm = function () {
				$scope.showForm = true;
			};
			this.save = function () {
                            var mensaje = "El usuario " +  $scope.user.firstName + " " + $scope.user.lastName + " nacio el dia " + $filter ('date')($scope.user.fecha);
				alert("Guardado: " + $scope.user.firstName + " " + $scope.user.lastName + " " + $filter ('date')($scope.user.fecha));
                                document.getElementById("resp").innerHTML= mensaje;
                        };
		}]);
 
	app.directive('userForm', [function () {
			return {
				restrict: 'E',
				templateUrl: 'src/modules/user/userTemplates.html'
			};
		}]);
})(); 