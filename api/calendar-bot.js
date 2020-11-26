const Planner = require('../src/eventscalendar/planner');

module.exports = async (req, res) => {
    // Usamos try y comprobamos el body por si hay algún error
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
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.status(200).json(objetoJSON);
        } else {
            res.status(200).send('Hola !\nBot Micro-Calendario a su servicio!');
        }
    } else {
        res.status(200).send('Hola !\nBot Micro-Calendario a su servicio.');
    }
};
