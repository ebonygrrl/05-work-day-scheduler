// Create global variables
    var currDate = $('#currentDay');


/*function convertTime(start,end) {

    var output = 0,
        convertMe = 0;

    var seconds = 1000, // 1 second
         minute = seconds * 60, // 60 seconds = 1 minute, 60,000 ms
           hour = minute * 60, // 60 minutes = 1 hour, 3,600,000 ms
            day = hour * 24; // 24 hours = 1 day, 86,400,000 ms

    // Set time blocks to only show 8 hours 9am - 5pm

    var currTime = new Date().getTime(); // convert time to ms
    
    var startHour = new Date().setHours(0,0,0,0); // convert time to 9am
    //console.log(moment(startHour).format("hh a"));
    
    var endHour = new Date().setHours(7,0,0,0); // convert time to 5pm

    var gap = endHour - startHour; // subtract end hour from start hour

    var calcHour = Math.floor(gap % day / hour);

    var convertMe = moment(currTime).format("h a");

    for (var i=0; i < calcHour; i++) {
        //post += startHour + i;
        if (currTime >= startHour && currTime < endHour ) {
            output = convertMe + [i+1]; 
            
        } else {
            output = "What are you doing?!";
        }

        //console.log(post);
        console.log(output);
    }

    //console.log(post);
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
    
//}*/

// Get date
function currentDate() {
    var currDateVal = $('#currentDay');

    currDateVal.html(moment().format('MMMM DD, YYYY'));
}

function init() {
    currentDate();
    timeBlocks();
    setInterval(currentDate, 1000);
}

function saveEntry() {

}

function timeBlocks() {
    //<div class="row time-blocks">
    var output = '';

    var blockCont = $('.time-blocks');

    var hrBlock = $('<td>');

    var taskBlock = $('<td>');

    var saveBlock = $('<td>');

    var currTime = moment().hour();
    console.log("currtime " + currTime);

    var startHour = moment().hour(1);
    console.log("start " + startHour);

    var endHour = moment().hour(9);
    console.log("end " + endHour);

    var gap = Math.ceil(moment.duration(startHour.diff(endHour))/3600000 * -1);
    console.log("gap " + gap);

    var plusHour = moment.duration(1, 'h');
    console.log("add hour" + plusHour);

    for (var i=0; i < gap; i++) {
        //post += startHour + i;
        if (currTime >= startHour && currTime < endHour ) {
            output = "ok"; 
            
        } else {
            output = "What are you doing?!";
        }

        console.log(output);
    }

} 

init();