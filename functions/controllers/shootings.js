const { db } = require('../util/admin');
const collectionKey = "shootings";

exports.getAllShootings = (req, res) => {
    db.collection(collectionKey).get()
        .then(docList => {
            let shootings = [];
            docList.forEach((doc) => {
                shootings.push(doc.data());
            });
            return res.json(shootings);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: err.code });
        });
};