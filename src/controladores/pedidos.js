const instanciaAxios = require("../servicos/pagarme")


const criarPedidos = async (req, res) => {
    const { body } = req;

    try {
        const pedido = await instanciaAxios.post('transactions', body)
        console.log(body)

        return res.json(pedido.data)
    } catch (error) {
        const { status, data: { errors } } = error.response;

        return res.status(status).json({
            erro: `${errors[0].parameter_name} - ${errors[0].message}`
        });
    }
}

const consultarPedidos = async (req, res) => {
    const { id } = req.params;

    try {
        const pedido = instanciaAxios.get(`transactions/${id}`);
        return res.json(pedido.data)
    } catch (error) {
        const { status, data: { errors } } = error.response;

        return res.status(status).json({
            erro: `${errors[0].parameter_name} - ${errors[0].message}`
        })

    }
}

module.exports = {
    consultarPedidos,
    criarPedidos
}