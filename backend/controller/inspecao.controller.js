const Inspecao = require('../models/Inspecao')

const cadastrar = async (req, res) => {
    const valores = req.body

    if (!valores.status || !valores.data || !valores.idEquipamento) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' })
    }

    try {

        await Inspecao.create(valores)

        return res.status(201).json({ message: 'Inpeção cadastrada com sucesso!' })
    } catch (err) {
        console.error('Erro no cadastro do Inpeção', err)
        return res.status(500).json({ message: 'Erro no servidor' })
    }
}

module.exports = {cadastrar}