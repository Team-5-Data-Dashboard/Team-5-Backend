const functions = require('firebase-functions');
const express = require('express');
const app = express();

const { getAllShootings } = require('./controllers/shootings');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
//

//Route to Receive all shootings in db
app.get('/shootings', getAllShootings);

exports.api = functions.https.onRequest(app);