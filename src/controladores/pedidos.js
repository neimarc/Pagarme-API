const instanciaAxios = require("../servicos/pagarme")


const criarPedidos = async (req, res) => {
    const { body } = req;

    try {
        const pedido = await instanciaAxios.post('transactions', body)
        console.log(body)

        return res.json(pedido.data)
    } catch (error) {

    }
}

const consultarPedidos = async (req, res) => {

}

module.exports = {
    consultarPedidos,
    criarPedidos
}