const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5001;

// Setup body parser - to translating request body into JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve "static assets" (html, css, client-side js)
// from the server/public folder
app.use(express.static('server/public'));

// Start express
app.listen(PORT, () => {
    console.log('up and running on port', PORT);
});

// need to set up an app.use for the task router and for the task library