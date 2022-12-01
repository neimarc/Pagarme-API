const instanciaAxios = require("../servicos/pagarme")


const criarPedidos = async (req, res) => {
    instanciaAxios.get('transactios')
}

const consultarPedidos = async (req, res) => {

}

module.exports = {
    consultarPedidos,
    criarPedidos
}