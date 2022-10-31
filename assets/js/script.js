// Create global variables
var blockCont = $('.container'),
    currTime  = moment().format('x'),
    startHour = moment().hour(20),
    endHour   = moment().hour(24),
    gap       = moment.duration(endHour - startHour).hours()
    plusOne   = startHour.add(1,'h');


// Output time block rows
function timeBlocks(duration) {
    for (var i=0; i < duration; i++) {  
        addRows(gap);   
    }
}
// Get and display date
function currentDate() {
    var currDate = $('#currentDay');
    currDate.text(moment().format('MMMM DD, YYYY'));
}

function init() {
    currentDate();    
    // Pass duration to another function
    timeBlocks(gap);
    //setInterval(currentDate, 1000);
}

function addRows(index) {
    // Create variables for elements
    var thisRow   = $('<div>').addClass('row'),
        timeBlock = $('<div>').addClass('col-1').text(startHour.format('h A')),
        textBlock = $('<div>').addClass('col'),
        saveBlock = $('<div>').addClass('col-1');

    for (var i=0; i < index; i++) {

    // Create form elements
    var formId = 'schedule-form-' + i,
        form   = '<form id=' + formId + 'method="POST">',
        task   = '<textarea name="myTask" form="schedule-form-' + i + '">Enter text here...</textarea>',
        save   = '<button type="submit" value=""><i class="fa-solid fa-floppy-disk fa-2xl"></i></button>';
        saveBlock.html(save);  
        //form.append(task,saveBlock);

    //while (i < index) {

        // Add elements  
        textBlock.append(form).append(task);
        thisRow.append(timeBlock,textBlock,saveBlock);  
        blockCont.append(thisRow);
        startHour.add(1,'h');
    }  
    console.log();
} 

init();
/* hrBlock.text(moment().hour(plusOne));
if (currTime >= startHour && currTime < endHour ) {
    hrBlock.text(plusOne);
} else {
    console.log("What are you doing?!");
}*/