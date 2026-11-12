const CryptoJs = require('crypto-js')
const CHAVE_SECRETA = 'segredo'

function authMiddleware(req, res, next) {
    const token = req.headers['authorization']
    if (!token) {
        return res.status(400).json({ message: 'Token não informado' })
    }

    const bytes = CryptoJs.AES.decrypt(token, CHAVE_SECRETA)
    const dadosDescriptografados = bytes.toString(CryptoJs.enc.Utf8)
    console.log('dados: ', dadosDescriptografados)

    if (!dadosDescriptografados) {
        return res.status(400).json({ message: 'Token inválido!' })
    }

    const payload = JSON.parse(dadosDescriptografados)

    if (Date.now() > payload.empiraEm) {
        return res.status(400).json({ message: 'Sessão expirada. faça login novamente!' })
    }

    next()
}

module.exports = authMiddleware