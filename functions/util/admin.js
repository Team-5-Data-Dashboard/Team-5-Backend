const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

const settings = {timestampsInSnapshots: true};
db.settings(settings);

module.exports = {admin, db};