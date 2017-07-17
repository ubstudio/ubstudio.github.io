$(document).ready(function() {

// Автообновление даты окончания акций

var today = new Date();
var now = today.getDate();
var year = today.getYear();
if (year < 2000) year += 1900; // Y2K fix
var month = today.getMonth();

var monarr = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var months_name = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];

// check for leap year
if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) monarr[1] = "29";

// display day left
if ( now == monarr[month] ) {
    $('.time1').html( "1" + " " + (months_name[month+1]) );
    $('.time2 .date').html( "1" );
    $('.time2 .month').html( months_name[month+1] );
} 
else {
    $('.time1').html( (now + 1) + " " + (months_name[month]) );
    $('.time2 .date').html( now + 1 );
    $('.time2 .month').html( months_name[month] );
};

});