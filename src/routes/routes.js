/* eslint strict: ["error", "global"] */

'use strict';

const express = require('express');
const logger = require('./logs/logger.js');

const app = express();

const Planner = require('../eventscalendar/planner');

const planner = new Planner();

// Crea un evento
app.put('/eventscalendar/', (req, res) => {
    // La fecha o el evento será introducido en la URL
    // fecha por defecto = ''
    // Entrada URL query parameters (después del ? en la URL)
    const { fecha = '' } = req.query;
    // El resultado que enviaremos finalmente
    let mensaje;
    if (fecha === '') {
        mensaje = 'Evento mal introducido (vacio).';
    }
    // El objeto tipo planner que usaremos para traducir
    // la fecha introducida por el usuario
    // Se convierte en tipo evento y hacemos toString
    const evento = planner.translate(`${fecha}`);
    if (evento === null || evento === false) {
        mensaje = `Evento mal introducido.`;
    } else {
        planner.addEvent(evento);
        const objetoJSON = {
            Fecha: `${evento.fecha.toString()}`,
            Motivo: `${evento.motivo.toString()}`,
        };
        mensaje = objetoJSON;
    }
    // Establecemos código de estado estándar (200)
    // Con res enviamos la función send, esta
    // contiene un string
    logger.info('Evento creado - [PUT]');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(mensaje);
});

app.get('/eventscalendar/', (req, res) => {
    let mensaje = planner.toString();
    if (mensaje === '') {
        mensaje = `No hay eventos.`;
    } else {
        let objetoJSON;
        for (let i = 0; i < planner.evento.length; i++) {
            objetoJSON += {
                Fecha: `${planner.getEvent(i).fecha.toString()}`,
                Motivo: `${planner.getEvent(i).motivo.toString()}`,
            };
        }
        mensaje = objetoJSON;
    }
    // Debería hacer un JSON
    logger.info('Eventos Multiples cargados - [GET]');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(mensaje);
});

app.get('/eventscalendar/:id', (req, res) => {
    let mensaje = planner.getEvent(req.params.id).toString();
    if (mensaje === '') {
        mensaje = `No hay eventos.`;
    } else {
        const objetoJSON = {
            Fecha: `${planner.getEvent(req.params.id).fecha.toString()}`,
            Motivo: `${planner.getEvent(req.params.id).motivo.toString()}`,
        };
        mensaje = objetoJSON;
    }
    // Debería hacer un JSON
    logger.info('Evento Especifíco cargado - [GET]');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(mensaje);
});

// Exportamos la variable para los tests
module.exports = app;
