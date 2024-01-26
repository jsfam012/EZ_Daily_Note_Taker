// Load in packages
const express = require('express')
const api_routes = require('./routes/api_routes');

// This is localhost
const PORT = 3334
const app = express();


// Opening up the middleware channel to allow json to be sent through from the client
app.use(express.json());

// Share or create a GET route for every file in the public folder (css, html, index.js)
app.use(express.static('.public'));

app.use('/api', api_routes);

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

















//NOT TOO SURE WHAT TO DO HERE
// async func to get the notes
// async function getNotes() {
//     const notes = await fs.promises.readFile('./db.json', 'utf8'); //is this right path??

//     return JSON.parse(notes);
// }

// // async func to save notes
// async function saveNotes(usersarr) {

// }

// // 
// app.get()





// const DB_PATH = path.join(__dirname, './data.json');

// async function getUserData() {
//     const users = await fs.promises.readFile(DB_PATH, 'utf8');
    
//     return JSON.parse(users);

// }

// async function saveUserData(usersArr) {
//     await fs.promises.writeFile(DB_PATH, JSON.stringify(usersArr, null, 2));

//     console.log('User Data Updated');
// }

// module.exports = {
//     getUserData,
//     saveUserData
// }