// Create global variables
    var currDate = $('#currentDay');


// Convert time
function convertTime() {
    var d = new Date();

    var seconds = 1000, // 1 second
         minute = seconds * 60, // 60 seconds
           hour = minute * 60, // 60 minutes
            day = hour * 24; // 1 day

    d.setHours(9,00,00);            
    console.log(d);        

    //Convert 24 hours to 12 hours
    var hours = Math.floor((d % 12)); // 0 = AM, 1 = PM
    var workDay =  hour * 8;


    //console.log(textDay);
    console.log((now % day) / day);
    //console.log(day + ", " + hour  + ", " + minute + ", " + seconds);

    var test = (Math.floor((d % day) / hour));
    console.log(test);
    //console.log(8*hour);

    // Start time @ 9am and add an hour by array
}

// Get date
function currentDate() {
    var currDateVal = $('#currentDay');

    currDateVal.html(moment().format('MMMM DD, YYYY'));
}

function init() {
    currentDate();
    convertTime();
}

function saveEntry() {

}

function timeBlocks() {
    var hrs = [];

    var blockCont = $('.time-blocks');

    var hrBlock = $('<td>');

    

} 

init();