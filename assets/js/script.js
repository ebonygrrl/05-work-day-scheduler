// Create global variables
var currTime  = moment().format('x'),
    startHour = moment().hour(1),
    endHour   = moment().hour(9),
    gap       = moment.duration(endHour - startHour).hours()
    plusOne   = startHour.add(1,'h');

// Output time block rows
function timeBlocks(duration) {
    for (var i=0; i < duration; i++) {  
        addRows();   
    }

    return;
}
// Get date
function currentDate() {
    var currDate = $('#currentDay');

    currDate.text(moment().format('MMMM DD, YYYY'));

    return;
}

function init() {
    currentDate();
    
    // Pass duration to another function
    timeBlocks(gap);

    //setInterval(currentDate, 1000);

    return;
}

function addRows() {
    // Create variables for elements
    var blockCont = $('.container'),
        hrBlock   = $('<div>'),
        taskBlock = $('<div>'),
        saveBlock = $('<div>'),
        blockRow  = $('<div>'),
        newRow    = $('<div>').addClass('row');

    /*console.log(currTime);
    console.log(startHour);
    console.log(endHour);
    console.log(gap);*/

    // Create form elements
    var form = $('<form>'),
        task = '<textarea name="myTask" form="schedule-form">Enter text here...</textarea>';

    // Format elements   
    hrBlock.addClass('col-1 hrBlock'); 
    taskBlock.addClass('col taskContainer');
    form.attr('id','schedule-form').attr('method','POST');        
    saveBlock.addClass('col-1 saveBtn').html('<button type="submit" value=""><i class="fa-solid fa-floppy-disk fa-2xl"></i></button>');
    
    form.append(task,saveBlock);
    newRow.append(form);
    taskBlock.append(newRow);  
    blockRow.addClass('row time-blocks').append(hrBlock,taskBlock);
    blockCont.append(blockRow);  

    return;
} 

init();
/* hrBlock.text(moment().hour(plusOne));
if (currTime >= startHour && currTime < endHour ) {
    hrBlock.text(plusOne);
} else {
    console.log("What are you doing?!");
}*/