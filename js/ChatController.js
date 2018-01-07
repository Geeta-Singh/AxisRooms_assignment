angular.module('chatcontrollers', ['chatting']).controller('MainCtrl', function ($scope, $timeout, $rootScope, PageConfig, Constants,
    $interval, ChatServices, UtilsFactory) {
    var inputParam = [];
    $scope.userList = [
        {
            "id": "12",
            "user": "Ryan Smith",
            "img": "https://randomuser.me/api/portraits/women/16.jpg",
            "messages": [
                {
                    "id": 0,
                    "text": "Hi, Mamatha. How are you?",
                    "created": "Fri, 14 Jul 2017 09:56:37 GMT",
                    "createdBy": 0
                },
                {
                    "id": 0,
                    "text": "Hello, Ryan Smith. I'm Fine",
                    "created": "Fri, 15 Jul 2017 09:56:37 GMT",
                    "createdBy": 12
                }
            ]
        },
        {
            "id": "2",
            "user": "Bertha	Keller",
            "img": "https://randomuser.me/api/portraits/women/73.jpg",
            "messages": [

            ]
        },
        {
            "id": "3",
            "user": "Marian	Harris",
            "img": "https://randomuser.me/api/portraits/women/12.jpg",
            "messages": [
            ]
        },
        {
            "id": "4",
            "user": "Chester Dixon",
            "img": "https://randomuser.me/api/portraits/women/66.jpg",
            "messages": [

            ]
        }
    ];
    console.log($scope.userList);
    $scope.changeUser=function(userid){
        localStorage.setItem(Constants.ACTIVE_USER, userid);
        localStorage.setItem(Constants.USER_DATA, JSON.stringify($scope.userList));
        console.log(userid);
        $rootScope.user_id=userid;
        console.log($rootScope.user_id);
    };
    // ChatServices.user().success(function (response) {
    //     // $scope.updateMarkerModal.show();
    //     //console.log(response);
    //     alert(responce);
    // }).error(function (error) {
    //     if (error == 'Origin Server returned 504 Status') {
    //         ionicToast.show('Internet is very slow', Constants.TOST_POSITION, false, Constants.TIME_INTERVAL);
    //     }
    //     else {
    //         console.log(error);
    //     }// ionicToast.show(error.err, Constants.TOST_POSITION, false, Constants.TIME_INTERVAL);
    // })
})