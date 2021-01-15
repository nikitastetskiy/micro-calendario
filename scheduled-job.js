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
        console.log('hola');
        const user = await userDB.getEventoExpirado();
        await new Promise((resolve) => {
            request(
                {
                    url: `https://api.telegram.org/bot${token}/sendmessage?chat_id=${
                        JSON.parse(JSON.stringify(user))[0].conversationId
                    }&text=Evento programado: ${
                        JSON.parse(JSON.stringify(user))[0].motivo
                    }`,
                },
                (error, response, body) => {
                    if (!error) resolve(body);
                }
            );
        }).then((value) => {
            userDB.deleteEventoExpirado(
                JSON.parse(JSON.stringify(user))[0]._id
            );
        });
    }
    await process.exit();
}

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {})
    .catch((error) => console.error(error));

Bucle();
