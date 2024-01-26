const router = require('express').Router();
const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');

if (!fs.existsSync('db.json')) {
    fs.writeFile ('db.json', json.stringfy ([]), function(err) {
        if (err) {
            return console.log(err);
        }
    }); 
}

//Create GET route for notes
router.get('/notes', (requestObj, responseObj) => {
    const notes = fs.readFileSync('db.json')
    responseObj.send(notes);
})




//Create POST routes for notes
router.post('/notes', express.json(), (requestObj, responseObj) => {

})




//Create Delete routes for notes
router.delete('/notes/:id', (requestObj, responseObj) => {
    
} )