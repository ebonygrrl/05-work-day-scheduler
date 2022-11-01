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
    var currHour = moment().format('h A');

    $('.hour').each(function() {
        var numHour = $(this).text();
        var rev = moment().set('hour', numHour).format('h A');
        
        if (numHour < currHour) {
            $(this).siblings().children('.description').addClass('past').removeClass('present future');
            console.log("past");
        } else if (numHour === currHour) {
            $(this).siblings().children('.description').addClass('present').removeClass('past future');
            console.log("present");
        } else {
            $(this).siblings().children('.description').addClass('future').removeClass('past present');
            console.log("future");
        }

        console.log(currHour === numHour? 'yes' : 'no');
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
//setInterval(function() {currHour(), 3600000});
currHour();