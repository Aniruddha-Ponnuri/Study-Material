angular.module('myApp', [])
.component('arithop', {
    template: '<div>' +
    '<input type="number" ng-model="$ctrl.num1">' +
    '<button ng-click="$ctrl.sqr()">Square</button>' +
    '<button ng-click="$ctrl.cube()">Cube</button>' +
    '<p>Result: {{ $ctrl.result }}</p>' +
    '</div>' ,
    controller: operation
    });
    function operation(){
    var ctrl = this;     
    ctrl.num1 = 0;
    ctrl.num2 = 0;
    ctrl.result = 0;
    ctrl.sqr = function () {
        ctrl.result = ctrl.num1 * ctrl.num1;
        };
        ctrl.cube = function () {
            ctrl.result = ctrl.num1 * ctrl.num1 * ctrl.num1;
        };
    }