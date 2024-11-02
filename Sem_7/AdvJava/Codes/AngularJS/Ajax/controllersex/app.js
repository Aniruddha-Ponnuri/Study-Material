angular.module('counterApp', [])
    .controller('CounterController', function() {
    var ctrl = this;
     // Initialize the count variable
        ctrl.count = 0;
      // Function to increment the count
        ctrl.increment = function() {
        ctrl.count += 1;
    };
    // Function to decrement the count
    ctrl.decrement = function() {
    ctrl.count -= 1;
        };
    });
