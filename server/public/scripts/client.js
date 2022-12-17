$(document).ready(onReady);


///////////////////////////////////////onReady function///////////////////////////////////////

function onReady() {
    console.log('dom ready');
    // need to call the getTasks function here to start with any existing tasks
    $('#submit').on('click', postTask);
    // need to make a click event to call a function to handle delete click events
    // same for status button. (on click could update the status, and be able to flip it back)
}


///////////////////////////////////////postTask function///////////////////////////////////////

function postTask() {
    console.log('submit button clicked');
    let taskObject = {
        task: $('.new-task').val(),
        status: 'work to do'
    }
    $.ajax({
        type: 'POST',
        url: '/taskLibrary',
        data: taskObject
    }).then( function (response) {
        $('.new-task').val('');  // clear the task input field
        getTasks();
    });
} // end of postTask function