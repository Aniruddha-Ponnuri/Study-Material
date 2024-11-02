angular.module('myApp', [])
.component('arithop', {
    template: '<div>' +
    '<input type="number" ng-model="$ctrl.num1">' +
    '<input type="number" ng-model="$ctrl.num2">' +
    '<button ng-click="$ctrl.add()">Add</button>' +
    '<button ng-click="$ctrl.subtract()">Subtract</button>' +
    '<button ng-click="$ctrl.multiply()">Multiply</button>' +
    '<button ng-click="$ctrl.divide()">Divide</button>' +
    '<p>Result: {{ $ctrl.result }}</p>' +
    '</div>' ,
    controller: operation
    });
    function operation(){
    var ctrl = this;     
    ctrl.num1 = 0;
    ctrl.num2 = 0;
    ctrl.result = 0;
    ctrl.add = function () {
        ctrl.result = ctrl.num1 + ctrl.num2;
        };
        ctrl.subtract = function () {
            ctrl.result = ctrl.num1 - ctrl.num2;
        };
        ctrl.multiply = function () {
            ctrl.result = ctrl.num1 * ctrl.num2;
        };
        ctrl.divide = function () {
        if (ctrl.num2 !== 0) {
            ctrl.result = ctrl.num1 / ctrl.num2;
        } else {
            ctrl.result = 'Cannot divide by zero!';
        }
    };
}