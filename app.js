const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.send('Hello Docker!');
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Listening to ${port}`)
});