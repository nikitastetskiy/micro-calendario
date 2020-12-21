// Para uso de Loger habrá que crear un archivo log-api.log en el mismo directorio

const { createLogger, format, transports } = require('winston');

module.exports = createLogger({
    // Con format hacemos nuestra información más legible
    // La podemos dividir en el tiempo, nivel y mensaje
    format: format.combine(
        format.simple(),
        format.timestamp(),
        format.printf(
            (info) => `[${info.timestamp}] ${info.level}: ${info.message}`
        )
    ),
    // Para transaladar la información en un archivo
    // hacer otro tranport con el peso máximo 5 MB y
    // máximo 5 logs. El nivel de información es debug
    transports: [
        new transports.File({
            maxsize: 5120000,
            maxFiles: 5,
            filename: `${__dirname}/log-api.log`,
        }),
        new transports.Console({
            level: 'debug',
        }),
    ],
});
