const Cliente = require('../models/Cliente')
const CryptoJs = require('crypto-js')
const CHAVE_SECRETA = 'segredo'

const cadastrar = async (req, res) => {
    const valores = req.body

    if (!valores.nome || !valores.email || !valores.senha||!valores.cpf) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' })
    }

    try {
        const senhaCripto = CryptoJs.AES.encrypt(valores.senha, CHAVE_SECRETA).toString()
        const cpfCripto = CryptoJs.AES.encrypt(valores.cpf, CHAVE_SECRETA).toString()

        await Cliente.create({
            nome: valores.nome,
            email: valores.email,
            senha: senhaCripto,
            cpf: cpfCripto,
        })

        return res.status(201).json({ message: 'Cliente cadastrado com sucesso!' })
    } catch (err) {
        console.error('Erro no cadastro do Cliente', err)
        return res.status(500).json({ message: 'Erro no servidor' })
    }
}

module.exports = {cadastrar}