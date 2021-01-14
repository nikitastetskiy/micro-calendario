/* eslint-disable no-await-in-loop */
/* eslint-disable no-empty */
/* eslint-disable no-underscore-dangle */
const request = require('request');
const mongoose = require('mongoose');
require('dotenv').config();

const userDB = require('./models/database')(mongoose);

const url = process.env.MONGODB_URI;
const token = process.env.TELEGRAM_API_TOKEN;

async function Bucle() {
    while ((await userDB.getNumEventosExpirados()) !== 0) {
        const user = await userDB.getEventoExpirado();
        const obj = await JSON.parse(JSON.stringify(user));
        await console.log(obj[0]._id);
        const data = await encodeURI('Evento cumplido!');
        await request(
            `https://api.telegram.org/bot${token}/sendmessage?chat_id=${obj[0].conversationId}&text=${data}`
        );
        await userDB.deleteEventoExpirado(obj[0]._id);
    }
}

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {})
    .catch((error) => console.error(error));

Bucle();

process.exit();
