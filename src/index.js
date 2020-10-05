const express = require('express');
const morgan = require('morgan');

// Initializations
const app = express();                      // App es mi aplicación

// Settings
app.set('port', process.env.PORT || 4000);  // Defino puerto

// Middlewares
app.use(morgan('dev'));

//Global Variables                          // Variables globales

// Routes                                   // URLs de nuestro servidor
app.use(require('./routes/'));

// Public                                   // Código accesible al navegador

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});


