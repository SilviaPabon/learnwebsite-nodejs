//con este archivo puedo crear mis rutas
const express = require('express');

//permite el manejo de varias rutas
const router = express.Router();

//routes
router.get('/', (req, res) => {
    //el objecto permite un cambio automático en cada página
    res.render('index.html', {title: 'First Website'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'Contact'});
});

module.exports = router;
