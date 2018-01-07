angular.module('Chat', ['chatconstants', 'chatconfig', 'chatinterceptor', 'chatservices', 'chatdirective',
'chatcontrollers', 'chatfilters', 'chatfactory'])
.run(function ( Constants, $rootScope, PageConfig, Messages) {});