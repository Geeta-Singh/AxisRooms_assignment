angular.module('chatting', []).controller('ChattingCtrl', function ($scope, $rootScope, $timeout, UtilsFactory, PageConfig, ChatServices,
	$interval, Constants,localStorage) {
	console.log("its inside chatting" + $rootScope.user_id);
	$scope.id = $rootScope.user_id;
	if (localStorage.getItem(Constants.ACTIVE_USER) != null) {
		$scope.id = localStorage.getItem(Constants.ACTIVE_USER);
	}
	console.log($scope.id);
})