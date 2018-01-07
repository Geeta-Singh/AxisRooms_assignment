var chatconstants = angular.module('chatconstants', []);

chatconstants.constant('Constants', {
	X_AUTH_TOKEN : 'x_auth_token',
	APP_VERSION : "0.0.1",
	ACTIVE_USER: 'active_user',
	USER_DATA: 'user_data',
	});
   

chatconstants.constant('PageConfig', {
    CHATTING: 'chatting',
	// LOGIN: 'login',
	// START: 'start',
	// LIVE_TRACKING : 'bats.livetracking',
	// FORGOT_PASSWORD : 'forgotpassword',
	// CHANGE_PASSWORD : 'bats.changepassword',
	// SIGNUP_STEP1:'signupstep1',
	// SIGNUP_STEP2:'signupstep2',
	// MANAGE_TRACKER: 'bats.managetracker',
	// UPDATE_MARKER_DETAILS : 'bats.updatemarkerdetails',
	// REPLAY_ROUTE:'bats.replayroute',
	// EVENT_HISTORY:'bats.eventhistory',
	// EVENT_HISTORY_DETAIL:'bats.eventhistorydetail',
	// VEHICLE_STATISTICS:'bats.vehiclestatistics',
	// VEHICLE_STATISTICS_DETAIL:'bats.vehiclestatisticsdetail',
	// NAVIGATION:'bats.navigation',
	// REPORT:'bats.report',
	// MANAGE_MEMBER:'bats.managemember',
	// LIVE_TRACKING_DETAILS:'bats.livetrackingdetails',
	// ADD_MEMBER:'bats.addmember',
	// EVENT_FILTER:'bats.eventfilter',	
	// LIVE_TRACKING_DEVICES : 'bats.livetrackingdevices',
	// REPLAY_ROUTE_DETAILS : 'bats.replayroutedetail',
	// NOTIFICATION : 'bats.notification',
	// GEOFENCE:'bats.geofence'
});
   

chatconstants.constant('Messages', {
	// NOT_AUTHORIZED_MESSAGE : "Login to continue!",
	// MEMBER_NOT_AUTHORIZED_MESSAGE : "Login to continue with admin/user account!",
});