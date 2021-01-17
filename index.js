/* eslint-disable no-underscore-dangle */
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const Planner = require('./src/eventscalendar/planner');

const app = express();

require('./models/database');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const userDB = require('./models/database')(mongoose);

app.get('/', (req, res) => res.send('Hello World - Micro-Calendario!'));

app.get('/status', (req, res) => res.send({ status: 'OK' }));

app.post('/webhooks/telegram', async (req, res) => {
    if (req.body !== undefined) {
        if (req.body.message !== undefined) {
            let mensaje = '';
            // Pillamos el body
            const { text } = req.body.message;
            // Comprobamos el contenido del mensaje
            if (text === '/help' || text.charAt(0) !== '/') {
                mensaje =
                    'Para crear eventos use este formato: "/1995-12-17T03:24:00 Evento 1" ó "/1995-12-17T03:24:00".';
            } else if (text === '/start') {
                mensaje =
                    'Hola !\nBot Micro-Calendario a su servicio!\nPara crear eventos use este formato: "/1995-12-17T03:24:00 Evento 1".';
            } else {
                const planner = new Planner();
                mensaje = `${text.slice(1, text.length)}`;
                const evento = planner.translate(`${mensaje}`);
                if (evento === null || evento === false) {
                    mensaje = `Evento mal introducido. Use "/help" para la lista de comandos.`;
                } else {
                    const id = req.body.message.from.id.toString();
                    const chat = req.body.message.chat.id;
                    const fec = evento.getFecha();
                    const mot = evento.getMotivo().toString();
                    await userDB.createEvento(id, chat, fec, mot);
                    mensaje = `Se ha creado evento en ${evento.toString()}`;
                }
            }
            // Creamos JSON con el mensaje generado
            // con el id del chat, el metodo de telegram
            // y response tipo json y utf-8 (nos lo pide
            // telegram)
            const objetoJSON = {
                text: mensaje,
                method: 'sendMessage',
                chat_id: req.body.message.chat.id,
            };
            res.location('/webhooks/telegram');
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.status(201).json(objetoJSON);
        } else {
            console.log(req);
            res.status(200).send('FIELD_MESSAGE_EMPTY');
        }
    } else {
        console.log(req);
        res.status(200).send('FIELD_BODY_EMPTY');
    }
});

app.get('/webhooks/telegram/:id', (req, res) => {
    let mensaje = '';
    const evento = userDB.getEvento(mongoose.Types.ObjectId(req.params.id));
    console.log(JSON.parse(JSON.stringify(evento))[0]);
    if (typeof evento !== 'undefined') {
        mensaje += `OK ${evento}`;
    } else {
        mensaje += 'NOT_FOUND';
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(mensaje);
});

const url = process.env.MONGODB_URI;

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        await app.listen(port); // Start the API
        console.log(`API running on port ${port}!`);
    })
    .catch((error) => console.error(error));

// app.listen(port, () =>
//     console.log(`Micro-Calendario app listening on port ${port}!`)
// );
