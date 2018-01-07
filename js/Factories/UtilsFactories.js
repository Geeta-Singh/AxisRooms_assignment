angular.module('utilsfactory', [])
.factory('UtilsFactory', function () {
    var storeMsg=[];
    return{
        setStoreData: function (data) {
            storeMsg = data;
        },
        getGetData: function () {
            return storeMsg;
        },
    }
})