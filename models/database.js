/* eslint-disable no-return-await */
/* eslint-disable new-cap */
// const mongoose = require('mongoose');

// mongoose
//     .connect(process.env.MONGODB_URI, {
//         useNewUrlParser: true,
//     })
//     .then((db) => console.log(`DB is connected - Micro-Calendario`))
//     .catch((err) => console.error(err));

class Db {
    /**
     * Constructors an object for accessing kittens in the database
     * @param mongoose the mongoose object used to create schema objects for the database
     */
    constructor(mongoose) {
        // This is the schema we need to store kittens in MongoDB
        const UserSchema = new mongoose.Schema({
            telegramId: { type: String, required: true },
            conversationId: { type: String, required: true },
            evento: [
                {
                    fecha: { type: Date, required: true },
                    motivo: { type: String, required: false },
                },
            ],
        });

        // This model is used in the methods of this class to access kittens
        this.userModel = mongoose.model('user', UserSchema);
    }

    async getUsers() {
        try {
            return await this.userModel.find({});
        } catch (error) {
            console.error('getUsers:', error.message);
            return {};
        }
    }

    async getUser(id) {
        try {
            return await this.userModel.findById(id);
        } catch (error) {
            console.error('getUser:', error.message);
            return {};
        }
    }

    async getOrCreateUser(id, chat, fec, mot) {
        console.log(
            this.userModel.find({
                telegramId: id,
            })
        );
        if (
            this.userModel.find({
                telegramId: id,
            }) === 1
        ) {
            console.log('funciona B');
            const userA = this.userModel.find({
                telegramId: id,
            });

            userA.update(
                { telegramId: userA.telegramId },
                {
                    $push: {
                        fecha: fec,
                        motivo: mot,
                    },
                }
            );
            return await userA;
        }
        console.log('funciona A');
        const usuario = {
            telegramId: id,
            conversationId: chat,
            evento: [
                {
                    fecha: fec,
                    motivo: mot,
                },
            ],
        };
        const user = new this.userModel(usuario);
        // user.telegramId = id;
        // user.conversationId = chat;

        // user.update(
        //     { telegramId: user.telegramId },
        //     {
        //         $push: {
        //             fecha: fec,
        //             motivo: mot,
        //         },
        //     }
        // );
        return await user.save();

        // console.log(evento.getFecha());
    }

    async createKitten(newUser) {
        // TODO: Error handling
        const user = new this.userModel(newUser);
        return await user.save();
    }
}

// We export the object used to access the kittens in the database
module.exports = (mongoose) => new Db(mongoose);
