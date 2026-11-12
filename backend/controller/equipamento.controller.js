const Equipamento = require('../models/Equipamento')
const CryptoJs = require('crypto-js')
const CHAVE_SECRETA = 'segredo'

const cadastrar = async (req, res) => {
    const valores = req.body

    if (!valores.modelo || !valores.fabricante || !valores.numSerie||!valores.idCliente) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' })
    }

    try {
        const numSerieCripto = CryptoJs.AES.encrypt(valores.numSerie, CHAVE_SECRETA).toString()

        await Equipamento.create({
            modelo: valores.modelo,
            fabricante: valores.fabricante,
            numSerie: numSerieCripto,
            idCliente: valores.idCliente,
        })

        return res.status(201).json({ message: 'Equipamento cadastrado com sucesso!' })
    } catch (err) {
        console.error('Erro no cadastro do Equipamento', err)
        return res.status(500).json({ message: 'Erro no servidor' })
    }
}

module.exports = {cadastrar}