## TO-DO

- [] Needs
    - [] Create front end that allows user to create a Task
    - [] Then store Task inside of an SQL database

    - [] When new Task created:
        - [] Front end should refresh showing all of the tasks needing to be completed

    - Tasks:
        - [] Each should have option to 'Complete' or 'Delete'

        - [] When Task completed: (complete both is css, but hook into logic)
            - [] visual representation should change
                - (Such as background of task container changing grey to green)
            - [] The complete option should be 'checked off.'

        - Deleting a Task
            - [] should remove the Task from front end and the database

### Setup
- [] Files
    - [] PUBLIC STATIC
    - [] HTML
    - [] CSS
        - [] background color
        - [] font family
        - [] font size
        - [] text color/background color of tasks to show if completed/not
    - [] jquery
    - [] client.js
    - [] .gitignore
    - [] package.json...
    - [] server.js
    - [] database.sql
    - [] Module folder that has file to access/require pg 
        - [] pool.js
    - [] Routes folder
        - [] task.router (can create the task variable that equals a blank array)
        - [] taskLibrary

### Client Side
- [] Input fields and Button
    - [] task-input
    - [] submit-button

- [] Output catch for task list

- [] jquery setup
    - [] ready function
        - [] getTasks call
        - [] click listener for submit/post button
        - [] click listener for handle-delete
        - [] click listener for handle-complete button

- [] AJAX Operations
    - [] GET (this should allow us to create html to append our response to the DOM)
    - [] POST
    - [] PUT
    - [] DELETE

### Server Side

- [] SET UP SERVER
    - []

### Postico Database





write if else statements that declare when an object is complete and triggers a css action. Could do this like when we did the color swap.
Could do an 'on.('click', .complete, function)' function that triggers the change in completeion then retriggers the entry of this item into the database. Then follow up by getting the database after the update and append the updated list to the dom.