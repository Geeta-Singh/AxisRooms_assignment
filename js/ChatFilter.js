angular.module('chatfilters', [])
.filter('eventTime', function(){
    return function(input){
         console.log(input);
          console.log("converted value "+moment(input).format('HH:MM, DDMMM'));
        return moment(input).format('HH:MM, DDMMM');
    }
})