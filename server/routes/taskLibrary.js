// need to set up a rout that connects us to the modules that connect us to our database
// then need to send sql querys over to make our logic/code functional
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const newTask = req.body;
    const queryText = `
        INSERT INTO "task_table" ("task", "status")
        VALUES ($1, $2) 
    `;
    pool.query(queryText, [newTask.task, newTask.status])
    .then((result) => {
        console.log('result', result);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error making insert query', error);
        res.sendStatus(500);
    });
});

router.get('/', (req, res) => {
    let queryText = 'SELECT * from task_table ORDER BY "id" asc;';
    pool.query(queryText)
    .then((result) => {
        console.log('results from database', result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error making a query', error);
        res.sendStatus(500);
    })
});


// need to add a router.delete to use along with the delete button functionality


module.exports = router;