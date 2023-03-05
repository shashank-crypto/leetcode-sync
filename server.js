const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // host a file
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);