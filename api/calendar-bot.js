const Planner = require('../src/eventscalendar/planner');

module.exports = async (req, res) => {
    let mensaje = '';
    // Usamos try y comprobamos el body por si hay algún error
    try {
        if (req.body !== undefined) {
            // Pillamos el body, el cual contiene el id
            const body = JSON.parse(req.body);
            const { chat, text } = body.message;
            // Comprobamos el contenido del mensaje
            if (text && text.charAt(0) === '/') {
                if (text === '/help') {
                    mensaje = 'Hola !';
                } else {
                    mensaje = 'Yikes !';
                }
                // Creamos JSON con el mensaje generado
                // con el id del chat, el metodo de telegram
                // y response tipo json y utf-8 (nos lo pide
                // telegram)
                const objetoJSON = {
                    text: mensaje,
                    method: 'sendMessage',
                    chat_id: chat.id,
                };
                res.setHeader(
                    'Content-Type',
                    'application/json; charset=utf-8'
                );
                res.status(200).json(objetoJSON);
            }
        } else {
            res.status(200).send('Bot Micro - Calendario');
        }
    } catch (error) {
        res.status(200).send('Error function');
    }
};
