const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    telegramId: { type: String, required: true },
    conversationId: { type: String, required: true },
    evento: [
        {
            fecha: { type: Date, required: true },
            motivo: { type: String, required: false },
        },
    ],
});

module.exports = model('User', UserSchema);
