const Planner = require('../src/eventscalendar/planner');

module.exports = (req, res) => {
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
    const planner = new Planner();
    const evento = planner.translate(`${fecha}`);
    if (evento === null || evento === false) {
        mensaje = `Evento mal introducido.`;
    } else {
        // mensaje = evento.toString();
        const objetoJSON = {
            Fecha: `${evento.fecha.toString()}`,
            Motivo: `${evento.motivo.toString()}`,
        };
        mensaje = objetoJSON;
    }
    // Establecemos código de estado estándar (200)
    // Con res enviamos la función send, esta
    // contiene un string
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(mensaje);
};
