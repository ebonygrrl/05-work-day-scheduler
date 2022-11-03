// Get today's date
function currentDate() {
    var currDate = $('#currentDay');
    currDate.html(moment().format('MMMM D, YYYY'));
}

// Get hour slot
function currHour() {
    var currHour = moment().hour(); // Using hour function makes variable an integer

    $('.hour').each(function() {
        var numHour = parseInt($(this).parent().attr('id').slice(5)); // Use parseInt to make string an integer
        
        if (numHour < currHour) {
            $(this).siblings().children('.description').addClass('past').removeClass('present future');           
        } else if (numHour === currHour) {
            $(this).siblings().children('.description').addClass('present').removeClass('past future');           
        } else {
            $(this).siblings().children('.description').addClass('future').removeClass('past present');          
        }

        //console.log(currHour === numHour? 'yes' : 'no');
        //console.log(currHour + ", " + numHour);
    });
}

// Listen for clicks on save button
$('.saveBtn').on("click", function () {
    var time = $(this).parent().parent().attr('id'), 
        tasks = $(this).parent().siblings().children('.description').val();

    //console.log(time + ", " + tasks);

    if (tasks === "") {
        alert("Please make an entry before saving.");
        // Clear textarea on click
        $('.description').focus(function() {
            $(this).val('');
        });
    } else {
        // Store entry
        localStorage.setItem(time,tasks);
        $('#success').css('display','block');    
    }
});

function init() {
    // Get today's date
    currentDate();
    
    // Get hour slot
    currHour();

    var storage = window.localStorage;

    // Retrieve saved data
    if (storage.length > 0) {
        $('.hour').each(function() {
            var numHourId = $(this).parent().attr('id');
            var getVal = localStorage.getItem(numHourId);
            var output = "#" + numHourId + " .description";

            $(output).val(getVal);
        });
    }
}

init();