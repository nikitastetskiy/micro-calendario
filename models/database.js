/* eslint-disable no-underscore-dangle */
/* eslint-disable no-return-await */
/* eslint-disable new-cap */
// const mongoose = require('mongoose');

class Db {
    constructor(mongoose) {
        // This is the schema
        const UserSchema = new mongoose.Schema({
            telegramId: { type: String, required: true },
            conversationId: { type: String, required: true },
            fecha: { type: Date, required: true },
            motivo: { type: String, required: false },
        });

        // This model is used in the methods of this class to access user
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

    // UPDATE NOT WORKING

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

module.exports = (mongoose) => new Db(mongoose);
