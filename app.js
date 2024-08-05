var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var consign = require('consign');

// criando rotas para os endpoints
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cadRouter = require('./routes/cadastrar');
var deletRouter = require('./routes/deletar');
var updatRouter = require('./routes/atualizaratendimento');
var consultaRouter = require('./routes/consultaatendimento');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// definindo rota padrão para cada chamada de endpoint
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cadastrar', cadRouter);
app.use('/deletar', deletRouter);
app.use('/atualizaratendimento', updatRouter);
app.use('/consultaatendimento', consultaRouter);

// consign é um biblioteca do node que elemina a necessidade de ao criar uma nova rota ter que modificar o app
// ele já faz a atualização do aplicativo automaticamente
consign({ 
    cwd : 'app', verbose: process.env.APP_DEBUG == true || false, locale : 'pt-br' 
}).include('../src/controllers').into(app);

module.exports = app;
