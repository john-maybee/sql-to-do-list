$(document).ready(onReady);


///////////////////////////////////////onReady function///////////////////////////////////////

function onReady() {
    console.log('dom ready');
    // need to call the getTasks function here to start with any existing tasks
    $('#submit').on('click', postTask);
    // need to make a click event to call a function to handle delete click events
    $('#incompleteTableBody').on('click', '.delete', handleDelete);
    // same for status button. (on click could update the status, and be able to flip it back)
    $('#incompleteTableBody').on('click', '.status', handleStatus);
} // end of onReady function


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
                    <td>${response[i].status}</td>
                    <td>
                        <button class="status-change">completed</button>
                    </td>
                    <td>
                        <button class="delete">delete</button>
                    </td>
                </tr>
            `)
        }
    })
}