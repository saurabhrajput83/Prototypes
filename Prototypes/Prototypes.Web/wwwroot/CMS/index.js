
// ready event
$(document).ready(function () {
    $('#txtInteractionDate').datepicker();
    $('#txtDateReceivedByOrg').datepicker();

});


// angular application module
var appModule = angular.module('appModule', []);

// angular application controller
appModule.controller('appController', ['$scope', function ($scope) {

    $scope.questions = [
        'What is product that best matches the request?',
        'What type of Product?',
        'Interaction Date',
        'Date Received by Organization',
        'Date Received by Business',
        'What is source of the request?',
    ];

    $scope.products = [
        'Mortgage/Home Equity'
    ];

    $scope.productTypes = [
        'Mortgage',
        'Home Equity'
    ];

}]);