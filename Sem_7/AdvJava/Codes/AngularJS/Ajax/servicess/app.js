angular.module('myApp', [])
.service('ArithmeticService', function() {
    this.square = function(number) {
        return Math.pow(number, 2);
    };

    this.cube = function(number) {
        return Math.pow(number, 3);
    };
    
    this.add = function(num1, num2) {
        return num1 + num2;
    };

    this.subtract = function(num1, num2) {
        return num1 - num2;
    };

    this.multiply = function(num1, num2) {
        return num1 * num2;
    };

    this.divide = function(num1, num2) {
        if (num2 != 0) {
            return num1 / num2;
        } else {
            return 'Cannot divide by zero';
        }
    };
});
angular.module('myApp')
.component('arithop', {
    template: '<div>' +
              '<p><input type="number" ng-model="$ctrl.num1" placeholder="Enter first number"></p>' +
              '<p><input type="number" ng-model="$ctrl.num2" placeholder="Enter second number"></p>' +
              '<button ng-click="$ctrl.calculateSquare()">Square</button>' +
              '<button ng-click="$ctrl.calculateCube()">Cube</button>' +
              '<button ng-click="$ctrl.calculateAdd()">Add</button>' +
              '<button ng-click="$ctrl.calculateSubtract()">Subtract</button>' +
              '<button ng-click="$ctrl.calculateMultiply()">Multiply</button>' +
              '<button ng-click="$ctrl.calculateDivide()">Divide</button>' +
              '<p>Result: {{$ctrl.Result}}</p>' +
              '</div>',
    controller: function(ArithmeticService) {
        var ctrl = this;

        ctrl.calculateSquare = function() {
            ctrl.Result = ArithmeticService.square(ctrl.num1);
        };

        ctrl.calculateCube = function() {
            ctrl.Result = ArithmeticService.cube(ctrl.num1);
        };

        ctrl.calculateAdd = function() {
            ctrl.Result = ArithmeticService.add(ctrl.num1, ctrl.num2);
        };

        ctrl.calculateSubtract = function() {
            ctrl.Result = ArithmeticService.subtract(ctrl.num1, ctrl.num2);
        };

        ctrl.calculateMultiply = function() {
            ctrl.Result = ArithmeticService.multiply(ctrl.num1, ctrl.num2);
        };

        ctrl.calculateDivide = function() {
            ctrl.Result = ArithmeticService.divide(ctrl.num1, ctrl.num2);
        };
    }
});
