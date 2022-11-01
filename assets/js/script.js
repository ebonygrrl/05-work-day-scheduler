// Create global variables
var currDate = $('#currentDay'),
    save     = document.querySelector('.saveBtn');

// Get today's date
function currentDate() {
    currDate.html(moment().format('MMMM DD, YYYY'));
}

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
        //console.log(typeof(currHour) + ", " + typeof(numHour));
    });
}

function saveTask(e) {
    var time = $(this).parent().attr('id'), 
        tasks = $(this).siblings('.description').val();

    e.preventDefault();    
    if (e.target !== e.currentTarget) { 
        alert("hi");

        
        localStorage.setItem("saveData", JSON.stringify(saveData));    
    }
}

// Listen for clicks on save button
save.addEventListener("click", saveTask);

// Clear textarea on click
$('.description').focus(function() {
    $(this).val('');
 });

// Get today's date
currentDate();

// Check time every half hour
//setInterval(function() {currHour(), 3600000});
currHour();