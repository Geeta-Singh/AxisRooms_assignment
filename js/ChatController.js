angular.module('chatcontrollers', ['chatting']).controller('MainCtrl', function ($scope, $timeout, $rootScope, PageConfig, Constants,
    $interval, ChatServices, UtilsFactory, $http) {
    var inputParam = [];
    $scope.list = [
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
                },
                {
                    "id": 0,
                    "text": "hmmm good",
                    "created": "Fri, 15 Jul 2017 09:56:37 GMT",
                    "createdBy": 0
                }, {
                    "id": 0,
                    "text": "tell me ",
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
    console.log($scope.list);
    $scope.userClicked = false;
    $scope.checkText = false;
    $scope.menuLink = 0;
    $scope.sortType = 'id'; // set the default sort type
    $scope.sortReverse = false;
    UtilsFactory.setStoreData($scope.list);
    $scope.userList = UtilsFactory.getGetData();

    // var req = {
    //     method: 'GET',
    //     url: 'http://demo4842709.mockable.io/users',
    //     headers: {
    //       'Content-Type': undefined
    //     },
    //     data: { test: 'test' }
    //    }



    //    $http(req).then(function(response){alert(JSON.stringify(response));}, function(response){alert(response);});
    // // $http({
    //     method: 'GET',
    //     url: 'http://demo4842709.mockable.io/users',
    //     headers: {
    //         'Content-Type':  text/plain
    //       },
    //   }).then(function successCallback(response) {
    //       // this callback will be called asynchronously
    //       // when the response is available
    //       alert(response);
    //     }, function errorCallback(response) {
    //       // called asynchronously if an error occurs
    //       alert(response);
    //       // or server returns response with an error status.
    //     });


    // ChatServices.user().success(function (response) {
    //     // $scope.updateMarkerModal.show();
    //     //console.log(response);
    //     alert(response);
    // }).error(function (error) {
    //     if (error == 'Origin Server returned 504 Status') {
    //        
    //     }
    //     else {
    //         console.log(error);
    //     }// 
    // })



    $scope.changeUser = function (userid) {
        $scope.textbox = '';
        $scope.userClicked = true;
        $scope.menuLink = userid;

        if (UtilsFactory.getGetData().length == 0) {
            $scope.userList = UtilsFactory.getGetData();
        }
        $scope.foundObject = _.findWhere($scope.userList, { id: userid });
        $scope.messages = $scope.foundObject.messages;
        $rootScope.user_id = userid;

    };
    var scroll_limit = 0;
    $scope.sendText = function (msg) {
        $scope.textbox = null;
        var temp = {};
        temp.id = '1';
        temp.text = msg,
        temp.created = 'Fri, 15 Jul 2017 09:56:37 GMT',
        temp.createdBy = $rootScope.user_id

        $scope.foundObject = _.findWhere($scope.userList, { id: $rootScope.user_id });
        $scope.messages = $scope.foundObject.messages;
        $scope.foundObject.messages.push(temp);

        scroll_limit = scroll_limit + 10;
        var scrollTop = $('.msgBody')[0].scrollTop,
            scrollHeight = $('.msgBody')[0].scrollHeight,
            offsetHeight = $('.msgBody')[0].offsetHeight;
        if (scrollTop === (scrollHeight - offsetHeight)) {
            var chat = $('.msgContainer');
            chat.scrollTop(chat.prop('scrollHeight') - chat.height());
        }


    }
    $scope.cunt = 0;
    $scope.changeOrder = function (id) {

        // console.log("hi" + $scope.cunt);
        if ($scope.cunt == 0) {
            $scope.sortType = 'user';
            $scope.cunt = 1;
        }
        else if ($scope.cunt != 0) {
            $scope.sortType = 'id';
            $scope.cunt = 0;
        }

        // console.log("calling change");
    }
})