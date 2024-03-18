const express = require('express')

const app = express();
app.get('/',(req,res) => {
    res.send("Crud Application")
})

app.listen(3000, ()=> {console.log(`Server is running on localhost:${3000}`)})


























/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

