var app = angular.module("myApp", []);
app.controller("myController", function ($scope) {
  $scope.numbers = [-2, -1, 0, 1, 2]; // Function to categorize numbers
  $scope.numberCategory = function (number) {
    if (number > 0) {
      return "positive";
    } else if (number < 0) {
      return "negative";
    } else {
      return "zero";
    }
  };
});
