// Create global variables
var blockCont = $('.container'),
    currTime  = moment().get('hour');


$('.hour-block').each(function() {
    var getHourTxt = $(this).html();
    var numHour = parseInt(getHourTxt, 10);
    var gap = 
    console.log(numHour + ", " + currTime);
    
    if (numHour === currTime) {
        $('.description').addClass('present');
        console.log("present");
    } else if (numHour < currTime) {
        $('.description').addClass('past');
        console.log("past");
    } else {
        $('.description').addClass('future');
        console.log("future");
    }
});



/*setInterval(function() {
    currHour;
}, 1000);*/