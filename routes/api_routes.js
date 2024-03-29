const router = require('express').Router();
const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

if (!fs.existsSync('db.json')) {
    fs.writeFile ('db.json', JSON.stringify([]), function(err) {
        if (err) {
            return console.log(err);
        }
    }); 
}

router.get('/notes', (requestObj, responseObj) => {
    responseObj.sendFile(path.join (process.cwd(), 'public/notes.html'));
})



//Create GET route for notes
router.get('/api/notes', (requestObj, responseObj) => {
    const notes = fs.readFileSync('db.json')
    responseObj.send(notes);
})


//Create POST routes for notes
router.post('/api/notes', express.json(), (requestObj, responseObj) => {
    const notes = JSON.parse(fs.readFileSync('db.json'))
    const note = requestObj.body
    note.id = uuidv4()
    notes.push(note)

    fs.writeFile ('db.json', JSON.stringify (notes), function (err) {
        if(err) {
            return console.log(err);
        }
        responseObj.send(note);
    })

})


//Create Delete routes for notes
router.delete('/api/notes/:id', (requestObj, responseObj) => {
    const notes = JSON.parse(fs.readFileSync('db.json'))
    const filterNotes = notes.filter(note => note.id !== requestObj.params.id);
    fs.writeFile ('db.json', JSON.stringify (filterNotes), function (err) {
        if(err) {
            return console.log(err);
        }
        responseObj.send(notes)
    });



//i think i need this???
// // route for the notes.html file
// app.get('/notes', (requesstObj, responseObj) =>
//     responseObj.sendFile(path.join(__dirname, './public/notes.html'))
// );

// route for the indext.html file
// app.get('*', (requestObj, responseObj) =>
//     responseObj.sendFile(path.join(process.cwd(), '/public/index.html'))
// );

} )

module.exports = router