const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Aplicación funcionando en el servidor');
});

module.exports = router;