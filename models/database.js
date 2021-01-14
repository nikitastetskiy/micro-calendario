/* eslint-disable no-underscore-dangle */
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
            fecha: { type: Date, required: true },
            motivo: { type: String, required: false },
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
            return await this.userModel.findOne({ telegramId: id });
        } catch (error) {
            console.error('getUser:', error.message);
            return {};
        }
    }

    // NO FUNCIONABA EL UPDATE ASI QUE LO HE TENIDO QUE CAMBIAR

    // async getOrCreateUser(id, chat, fec, mot) {
    //     // console.log(
    //     //     this.userModel.find({
    //     //         telegramId: id,
    //     //     })
    //     // );
    //     this.userModel.count({ telegramId: id }, (err, count) => {
    //         if (count > 0) {
    //             console.log('funciona B');
    //             this.userModel.update(
    //                 { telegramId: id },
    //                 {
    //                     $push: {
    //                         evento: {
    //                             fecha: fec,
    //                             motivo: mot,
    //                         },
    //                     },
    //                 }
    //             );
    //         } else {
    //             console.log('funciona A');
    //             const usuario = {
    //                 telegramId: id,
    //                 conversationId: chat,
    //                 evento: [
    //                     {
    //                         fecha: fec,
    //                         motivo: mot,
    //                     },
    //                 ],
    //             };
    //             const user = new this.userModel(usuario);
    //             user.save();
    //         }
    //     });
    //     // this.close();
    // }

    async createEvento(id, chat, fec, mot) {
        const evento = {
            telegramId: id,
            conversationId: chat,
            fecha: fec,
            motivo: mot,
        };
        const user = await new this.userModel(evento);
        await user.save();
    }

    async getNumEventosExpirados() {
        const count = await this.userModel.countDocuments({
            fecha: { $lte: Date.now() },
        });
        return await count;
    }

    async getEventoExpirado() {
        const evento = await this.userModel
            .find({ fecha: { $lte: Date.now() } })
            .limit(1);
        return await evento;
    }

    async getEventoId() {
        const evento = await this.userModel
            .find({ fecha: { $lte: Date.now() } })
            .limit(1);
        return await evento.conversationId;
    }

    async deleteEventoExpirado(id) {
        try {
            await this.userModel.deleteOne({ _id: id });
        } catch (e) {
            console.error(e);
        }
    }
}

// We export the object used to access the kittens in the database
module.exports = (mongoose) => new Db(mongoose);
