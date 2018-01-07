angular.module('chatservices', [])
.service('ChatServices', function ($http, Constants) {
   
    var baseUrl = "http://demo4842709.mockable.io/"; 
    this.user = function () {
        console.log("inisede service api call");
        return $http.get(baseUrl + 'users');
    }
})