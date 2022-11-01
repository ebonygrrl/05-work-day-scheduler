// Create global variables
var currDate = $('#currentDay');
var save     = document.querySelector('.saveBtn');

var blockCont = $('.container'),
    currTime  = moment().format('h A');
    start     = moment().startOf('day');
    end       = moment().endOf('day');

function currentDate() {
    currDate.html(moment().format('MMMM DD, YYYY'));
}

function currHour() {
    var currHour = moment().hour();

    $('.hour').each(function() {
        var numHour = $(this).text();
        var rev = moment().set('hour', numHour).format('h A');
        
        if (moment().isBefore(rev)) {
            $('.description').addClass('past');
            console.log("past");
        } else if (moment().isAfter(rev)) {
            $('.description').addClass('future');
            console.log("future");
        } else {
            $('.description').addClass('present');
            console.log("present");
        }
    });
}

function saveTask(e) {
    e.preventDefault();
    
    if (e.target !== e.currentTarget) { 
        alert("hi");
    }
}

// Listen for clicks on save button
save.addEventListener("click", saveTask);

// Get today's date
currentDate();

// Check time every half hour
//setInterval(function() {currHour(), 10000});
currHour();