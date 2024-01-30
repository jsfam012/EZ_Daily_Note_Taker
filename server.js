// Load in packages
const express = require('express')
const api_routes = require('./routes/api_routes.js');

// This is localhost
const PORT = 3334
const app = express();


// Opening up the middleware channel to allow json to be sent through from the client
// app.use(express.json());

// Share or create a GET route for every file in the public folder (css, html, index.js)
app.use(express.static('public'));

// Load routes
app.use('/', api_routes);

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

