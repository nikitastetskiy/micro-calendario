/* eslint-disable no-underscore-dangle */
const TelegramBot = require('node-telegram-bot-api');
const mongoose = require('mongoose');

const userDB = require('./models/database')(mongoose);

const url = process.env.MONGODB_URI;

const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log(`BD - BOT Schedule`);
    })
    .catch((error) => console.error(error));

bot.on('message', (msg) => {
    while (userDB.getNumEventosExpirados() !== 0) {
        const user = userDB.getEventoExpirado();
        bot.sendMessage(user.conversationId, 'Hello dear user');
        userDB.deleteEventoExpirado(user._id.toString());
    }
});
