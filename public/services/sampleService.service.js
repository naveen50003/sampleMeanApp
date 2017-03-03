var serviceApp = angular.module('samService', []);
serviceApp.service('sampleService', ['$http', '$q', function($http, $q) {



    console.log("entered sample service");
    this.getDetails = function(name) {

        var defered = $q.defer();
        console.log("entered getDetails in sampleService");
        console.log(name);
        $http.get('/getProfiles/' + name).then(function(res) {
            console.log(res);
            defered.resolve(res.data);
        }, function() {
            defered.reject({});
        })
        return defered.promise;
    }
}])
