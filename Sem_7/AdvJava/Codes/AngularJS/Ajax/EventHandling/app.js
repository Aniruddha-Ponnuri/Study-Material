var app = angular.module('myApp2', []);
    app.controller('myController', function($scope) {
        $scope.message = "Welcome to AngularJS!";
        $scope.greet = function() {
            $scope.message = "Click Event";
        };      
});
