## TO-DO

- [] Needs
    - [] Create front end that allows user to create a Task
    - [] Then store Task inside of an SQL database
    - [] When new Task created:
        - [] Front end should refresh showing all of the tasks needing to be completed
    - Tasks:
        - [] Each should have option to 'Complete' or 'Delete'
        - [] When Task completed: (complete both is css, but hook into logic (see instructions))
            - [] visual representation should change
                - (Such as background of task container changing grey to green)
            - [] The complete option should be 'checked off.'

### Setup
- [] 

### Client Side

### Server Side





write if else statements that declare when an object is complete and triggers a css action. Could do this like when we did the color swap.
Could do an 'on.('click', .complete, function)' function that triggers the change in completeion then retriggers the entry of this item into the database. Then follow up by getting the database after the update and append the updated list to the dom.