const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const {auth} = require('../middlewares/authMiddleware');

function expressConfig(app) {
    // Middleware - express.static()
    // app.use(express.static('src/public'));
    app.use(express.static(path.resolve(__dirname, '../public')));
    app.use(express.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(auth);
}

module.exports = expressConfig;