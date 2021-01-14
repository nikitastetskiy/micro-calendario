/* eslint-disable no-underscore-dangle */
const TelegramBot = require('node-telegram-bot-api');
const aws = require('aws-sdk');
const mongoose = require('mongoose');

const userDB = require('./models/database')(mongoose);

const s3 = new aws.S3({
    url: process.env.MONGODB_URI,
    token: process.env.TELEGRAM_API_TOKEN,
});

console.log(s3.url);

const bot = new TelegramBot(s3.token, { polling: true });

mongoose
    .connect(s3.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log(`BD - BOT Schedule`);
    })
    .catch((error) => console.error(error));

bot.on('message', (msg) => {
    console.log(`A`);
    while (userDB.getNumEventosExpirados() !== 0) {
        console.log(`B`);
        const user = userDB.getEventoExpirado();
        // bot.sendMessage(user.conversationId, 'Hello dear user');
        userDB.deleteEventoExpirado(user._id.toString());
    }
});
