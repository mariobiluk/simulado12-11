const Funcionario = require('../models/Funcionario')
const CryptoJs = require('crypto-js')
const CHAVE_SECRETA = 'segredo'

const logar = async (req, res) => {
    const valores = req.body

    if (!valores.email || !valores.senha) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' })
    }

    try {
        const funcionario = await Funcionario.findOne({ where: { email: valores.email } })
        if (!funcionario) {
            return res.status(400).json({ message: 'Email inválido' })
        }

        const bytes = CryptoJs.AES.decrypt(funcionario.senha, CHAVE_SECRETA)
        const senhaDescripto = bytes.toString(CryptoJs.enc.Utf8)

        if (valores.senha !== senhaDescripto) {
            return res.status(400).json({ message: 'Senha inválida' })
        }

        const minsEmMs = 200 * 60 * 1000
        const tempoParaExpirar = Date.now() + minsEmMs

        const payload = {
            idFuncionario: funcionario.codFuncionario,
            nome: funcionario.nome,
            expiraEm: tempoParaExpirar
        }

        const token = CryptoJs.AES.encrypt(JSON.stringify(payload), CHAVE_SECRETA).toString()

        return res.status(200).json({
            message: 'Usuário logado!',
            nome: funcionario.nome,
            token: token
        })
    } catch (err) {
        console.error('Erro no login do funcionário', err)
        return res.status(500).json({ message: 'Erro no servidor' })
    }
}

module.exports = { logar }