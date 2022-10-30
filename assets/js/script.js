// Create global variables
    var currDate = $('#currentDay');


// Convert time
function convertTime(start,end) {
    var post = "";

    var seconds = 1000, // 1 second
         minute = seconds * 60, // 60 seconds
           hour = minute * 60, // 60 minutes
            day = hour * 24; // 1 day

    // Set time blocks to only show 8 hours 9am - 5pm

    var currTime = new Date().getTime(); // convert time to ms
    console.log("date: " + currTime);
    
    var startHour = new Date().setHours(9,0,0,0); // convert time to 9am
    console.log("hours: " + startHour);

    var endHour = new Date().setHours(17,0,0,0); // convert time to 9am
    console.log("hours: " + endHour);

    var gap = Math.floor(endHour - startHour); // subtract 9am from current time
    console.log("gap: " + gap);


    var calcHour = Math.floor(gap % day / hour);
    console.log("textday: " + calcHour);

    for (var i=0; i < calcHour; i++) {
        post += "hour: " + [i+1];
    }

    console.log(post);
/*
    if (hours >= 12) {
        //console.log("It's AM!");
        merīdiem = "<span>AM</span>";
    } else {
        //console.log("It's PM!");
        merīdiem = "<span>PM</span>";
    }
    
    hours = hours % 12;*/
    //console.log(hours);
    
}

// Get date
function currentDate() {
    var currDateVal = $('#currentDay');

    currDateVal.html(moment().format('MMMM DD, YYYY'));
}

function init() {
    currentDate();
    convertTime();
    setInterval(currentDate, 1000);
}

function saveEntry() {

}

function timeBlocks() {
    //<div class="row time-blocks">
    var hrs = [];

    var blockCont = $('.time-blocks');

    var hrBlock = $('<td>');

    var taskBlock = $('<td>');

    var saveBlock = $('<td>');

} 

init();