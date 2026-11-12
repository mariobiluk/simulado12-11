const express = require('express')
const app = express()
const cors = require('cors')

const conn = require('./db/conn')
const authMiddleware = require('./middleware/auth.middleware')
const funcionarioController = require('./controller/funcionaro.controller')
const authController = require('./controller/auth.controller')
const clienteController = require('./controller/cliente.controller')
const equipamentoController = require('./controller/equipamento.controller')
const inspecaoController = require('./controller/inspecao.controller')
const hostname = 'localhost'
const PORT = 3000

//middleware

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

//rotas publicas

app.post('/funcionario', funcionarioController.cadastrar)
app.post('/login', authController.logar)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Aplicação rodando' })
})

//rotasPrivadas

app.use(authMiddleware)

app.post('/cliente', clienteController.cadastrar)
app.post('/equipamento', equipamentoController.cadastrar)
app.post('/inspecao', inspecaoController.cadastrar)

//server

conn.sync()
    .then(() => {
        app.listen(PORT, hostname, () => {
            console.log(`Aplicação rodando em http://localhost:3000`)
        })
    })
    .catch((err) => {
        console.error('Erro no servidor', err)
    })