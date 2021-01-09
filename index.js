const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World - Micro-Calendario!'));

app.listen(port, () =>
    console.log(`Micro-Calendario app listening on port ${port}!`)
);
