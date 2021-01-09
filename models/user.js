const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

class User extends Model {}
User.init(
    {
        telegramId: DataTypes.STRING,
        name: DataTypes.STRING,
        lastQuestion: DataTypes.STRING,
        latLon: DataTypes.STRING,
        conversationId: DataTypes.STRING,
    },
    { sequelize, modelName: 'user' }
);

User.createFromRequest = async (body) => {
    const telegramId = body.message.from.id.toString();
    const conversationId = body.message.chat.id;
    return User.findOrCreate({
        where: { telegramId },
        defaults: { telegramId, conversationId },
    });
};

module.exports = User;
