angular.module('validationApp', [])
.controller('formController', function() {
    this.user = {};

    this.submitForm = function(form) {
        if (form.$valid) {
            alert('Form submitted successfully!');
        }
    };
});