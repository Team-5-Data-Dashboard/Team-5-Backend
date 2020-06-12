const functions = require('firebase-functions');
const admin = require('firebase-admin');

const collectionKey = "shootings";


admin.initializeApp();

const express = require('express');
const app = express();

const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
//
app.get('/getAllShootings', (req, res) => {
    firestore.collection(collectionKey).get()
        .then(docList => {
            let shootings = [];
            docList.forEach((doc) => {
                shootings.push(doc.data());
            });
            return res.json(shootings);
        })
        .catch(err => console.error(err));
});

exports.api = functions.https.onRequest(app);