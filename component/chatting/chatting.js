angular.module('chatting', []).controller('ChattingCtrl', function ($scope, $rootScope, $timeout, UtilsFactory, PageConfig, ChatServices,
	$interval, Constants) {
		$rootScope.userList = [
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
		console.log($rootScope.userList);
	console.log("its inside chatting" + $rootScope.user_id);
	$scope.uid = $rootScope.user_id;
	// if (localStorage.getItem(Constants.ACTIVE_USER) != null) {
	// 	$scope.id = localStorage.getItem(Constants.ACTIVE_USER);
	// }
	$scope.data = localStorage.getItem(Constants.USER_DATA);
	console.log($scope.uid,$scope.data);
	var foundObject = _.findWhere($scope.data , {id: $scope.uid});
	console.log(" selected obj \n"+$scope.uid,foundObject);
	$scope.send = function () {

	};
	$scope.changeUser=function(userid){
        localStorage.setItem(Constants.ACTIVE_USER, userid);
       // $scope.data;
        var foundObject = _.findWhere($scope.userList, {id: userid});
       // var obj = _.find(objArray, function (obj) { return obj.id === 3; });
        console.log(" selected obj \n"+JSON.stringify(foundObject));
        localStorage.setItem(Constants.USER_DATA, JSON.stringify($scope.userList));
        console.log(userid);
        $rootScope.user_id=userid;
        console.log($rootScope.user_id);
       // $state.go(PageConfig.CHATTING)
    };
})