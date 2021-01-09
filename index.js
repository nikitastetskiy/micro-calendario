const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const User = require('/models/user');

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World - Micro-Calendario!'));

app.post('/webhooks/telegram', (req, res) => {
    console.log(req.body);

    res.send({ status: 'ok' });
});

app.listen(port, () =>
    console.log(`Micro-Calendario app listening on port ${port}!`)
);
