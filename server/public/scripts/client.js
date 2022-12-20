$(document).ready(onReady);


///////////////////////////////////////onReady function///////////////////////////////////////

function onReady() {
    console.log('dom ready');
    // need to call the getTasks function here to start with any existing tasks
    getTasks();
    // handle the submit button click
    $('#submit').on('click', postTask);
    // need to make a click event to call a function to handle delete click events
    $('#incompleteTableBody').on('click', '.delete', handleDelete);
    // same for status button. (on click could update the status, and be able to flip it back)
    $('#incompleteTableBody').on('click', '.status-change', handleStatus);
} // end of onReady function

// let status = 'work to do';
///////////////////////////////////////postTask function///////////////////////////////////////

function postTask() {
    console.log('submit button clicked');
    let taskObject = {
        task: $('#new-task').val(),
        status: 'work to do'
    };
    $.ajax({
        type: 'POST',
        url: '/taskLibrary',
        data: taskObject
    }).then( function (response) {
        $('#new-task').val('')  // clear the task input field
        getTasks();
    });
} // end of postTask function


///////////////////////////////////////getTasks function///////////////////////////////////////

function getTasks() {
    $('#incompleteTableBody').empty(); // clear the table body for the top table
    $.ajax({
        type: 'GET',
        url: '/taskLibrary'
    }).then( function (response) {
        console.log('GET /taskLibrary response', response);
        // need to append the data to the DOM
        for (let i = 0; i < response.length; i++) {
            $('#incompleteTableBody').append(`
                <tr data-id=${response[i].id}>
                    <td>${response[i].task}</td>
                    <td>
                        <p id="status-change-label" for="status-change">${response[i].status}</p>
                        <button class="status-change">done</button>
                    </td>
                    <td>
                        <p id="delete-label" for="delete">delete task</p>
                        <button class="delete">delete</button>
                    </td>
                </tr>
            `);
        }
    });
} // end getTasks function


///////////////////////////////////////handleDelete function///////////////////////////////////////

function handleDelete() {
    console.log('delete button clicked');
    // need to empty the full row that (this) resides in
    const id = $(this).parent().parent().data('id');
    $.ajax({
        type: 'DELETE',
        url: `/taskLibrary/${id}`
    }).then( function () {
        getTasks();
    }).catch(function(error) {
        console.log('error with deleting, ', error);
    });
}  // end handleDelete function


///////////////////////////////////////handleStatus function///////////////////////////////////////

function handleStatus() {
    console.log('completed task');
    // need to switch the status
    const id = $(this).parent().parent().data('id');
    $(this).parent().toggleClass('left-color');
    // status.css('background-color', '#5F79DC');
    $.ajax({
        type: 'PUT',
        url: `/taskLibrary/status/${id}`,
        data: {state: 'completed'},
    }).then( function (){
        getTasks();
    }).catch( function(error) {
        console.log('error with putting, ', error);
    });
}