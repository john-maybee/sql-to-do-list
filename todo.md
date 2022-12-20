## TO-DO


### Project Requirements
- [] Needs
    - [x] Create front end that allows user to create a Task
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
    - [x] HTML
    - [x] CSS
        - [x] background color
        - [x] font family
        - [] font size
        - [] text color/background color of tasks to show if completed/not

    - [x] jquery
    - [x] client.js
    - [x] .gitignore
    - [x] package.json...
    - [x] server.js
    - [] database.sql
    - [] Module folder that has file to access/require pg 
        - [] pool.js

    - [x] Routes folder
        - [x] task.router (can create the task variable that equals a blank array)
        - [x] taskLibrary


### Client Side
- [x] Input fields and Button
    - [x] task-input
    - [x] submit-button

- [x] Output catch for task list

- [x] jquery setup
    - [x] ready function
        - [x] getTasks call
        - [x] click listener for submit/post button
        - [x] click listener for handle-delete
        - [] click listener for handle-complete button

- [x] AJAX Operations
    - [x] GET (this should allow us to create html to append our response to the DOM)
    - [x] POST
    - [] PUT
    - [x] DELETE


### Server Side
Setup:
- [x] express
- [x] Ports
- [x] Body Parser
- [x] app.use paths to the task router and task library
- [x] app.listen to the port 


### Routes
- [x] task Library to hold our sql query texts. this will let us access our pg pool
    - [x] router.delete 
        - will be needed to delete the id/row associated with the delete button that is clicked

    - [x] router.post
        - This will help us post our new task into the database.

    - [] router.post 
        - this one will help us post the fact our task is completed into the database (or should this be a router.put?)

    - [x] router.get needed to be able to select the 

- [x] task router to create the task variable that equals an array 
    - [] could make it so an existing array of task objects exists on load.

- [] module.exports for each router
- [x] require express
- [x] express.router


### Postico Database
- [x] create a table that holds the tasks and their values
- [] create an insert into tasks sql request
- [] create a delete from tasks sql request
- [] write out the select _ from _ requests

--------------------------------------------------------------------------------------

## Ideas and Questions

- Could make a completed task array and a todo task array. Store each in its own array then display each array on the dom. one under completed tasks and the other under todo tasks.

- Write if else statements that declare when an object is complete and triggers a css action. Could do this like when we did the color swap.

- Could do an 'on.('click', .complete, function)' function that triggers the change in completeion then retriggers the entry of this item into the database. Then follow up by getting the database after the update and append the updated list to the dom.

- Could put an h1 in front of second list (completed tasks) and title it "reasons i should nap (just a lil bit)" [x]
    - Will only get items added to this list after I get the base parameters of the project completed.


- Another idea is to create a status variable outside of the function that = 'working on it'. then pass through this variable through the client as data being passed through