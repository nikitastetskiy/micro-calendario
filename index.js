const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const User = require('./models/user');
const sendMessage = require('./src/telegram/telegram');

[User].map((model) => model.sync({ force: false }));

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World - Micro-Calendario!'));

app.post('/webhooks/telegram', async (req, res) => {
    console.log(req.body);
    const user = User.createFromRequest(req.body)[0];
    // console.log(user.conversationId);
    const objetoJSON = {
        text: 'Hola',
        method: 'sendMessage',
        chat_id: req.body.message.chat.id,
    };
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(200).json(objetoJSON);
    // res.send({ status: 'ok' });
});

app.listen(port, () =>
    console.log(`Micro-Calendario app listening on port ${port}!`)
);
