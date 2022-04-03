const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    let newFeedbackForm = req.body;
    console.log(`Adding feedback`, newFeedbackForm);

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedbackForm.feeling, newFeedbackForm.understanding, newFeedbackForm.support, newFeedbackForm.comments])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding new feedback form`, error);
            res.sendStatus(500);
        });
});

module.exports = router;