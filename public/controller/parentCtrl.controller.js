var app = angular.module('samAppCtrl', []);
app.controller('parentctrl', ['$scope', 'sampleService', function($scope, sampleService) {

    console.log("Entered to parentCtrl");
    $scope.persons = [{
        name: "Ramesh",
        gender: "male",
        age: 25
    }, {
        name: "kishori",
        gender: "female",
        age: 25
    }];

    $scope.getDetails = function(name) {

        console.log("Entered getDetails function");
        sampleService.getDetails(name).then(function(res) {

            console.log("reached controller after service hit");
            console.log(res);
            $scope.personInfo = res;
            console.log($scope.personInfo);
        });
    }
}])
