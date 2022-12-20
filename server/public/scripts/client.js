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
            `)    
        }
        for(let i = 0; i < response.length; i++)  {
            if (response[i].status == "completed") {
                console.log('complete change');
                $(this).parent().toggleClass('left-color');
            }
            else if (response[i].status == "work to do"){
                console.log('no change in background');
            }
        }  
    });
} // end getTasks function

// $(this).parent().toggleClass('left-color');
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
    $.ajax({
        type: 'PUT',
        url: `/taskLibrary/status/${id}`,
        data: {state: 'completed'},
    }).then( function (){
        getTasks();
        // changeColor();
    }).catch( function(error) {
        console.log('error with putting, ', error);
    });
}

////////////////////////////////////////changeColor function///////////////////////////////////////
// see if making a seperate function changes the background color of the status data
// function changeColor() {
//    $(this).parent().toggleClass('left-color');
// }



// should I do an if else within the GET function? This way I could possibly rotate back through the information and append it according to the status
// does this need to be happening in the task.router after the items are returned and ready to push?