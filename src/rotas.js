const express = require('express');
const pedidos = require('./controladores/pedidos');

const rotas = express();


rotas.post('/criar-pedidos', pedidos.criarPedidos);
rotas.get('/consultar-pedido', pedidos.consultarPedidos);

module.exports = rotas