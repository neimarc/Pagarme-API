const express = require('express');
const pedidos = require('./controladores/pedidos');

const rotas = express();


rotas.post('/criar-pedido', pedidos.criarPedidos);
rotas.get('/consultar-pedido/:id', pedidos.consultarPedidos);

module.exports = rotas