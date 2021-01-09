const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const TELEGRAM_API_TOKEN = process.env.TELEGRAM_API_TOKEN || '';

app.get('/', (req, res) => res.send('Hello World - Micro-Calendario!'));

app.listen(port, () =>
    console.log(`Micro-Calendario app listening on port ${port}!`)
);
