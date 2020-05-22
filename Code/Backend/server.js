const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o App
const app = express()

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

requireDir('./src/models')

app.use('/', require('./src/routes'))

app.listen(3000, () => {

    console.log('Servidor rodando')
})