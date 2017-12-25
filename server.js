const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
const app = express();

let filestackResponse;

const db = require('./api/db.json').videos;

app.use(bodyParser.urlencoded({ extended: true }));

// videos API
app
    .route('/api/v1/videos')
    .get((req, res) => {
        res.json(db.reverse());
    })
    .post((req, res) => {
        const video = Object.assign({}, req.body, { id: (db.length + 1) });
        db.push(video);
        res.json({ message: 'Successfully added!' });
    });

// convert API to communicate with Filestack
app.route('/api/v1/convert')
    .get(() => {
        res.json({ response: filestackResponse });
    })
    .post(() => {
        const { status, uuid, data: { url } } = req.body;
    });

app.listen(port, () => { 
    console.log(`JSON server is running on port ${port}!`); 
});
