const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Equipamento = db.define('equipamento', {
    codEquipamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fabricante: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numSerie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idCliente:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            key: 'codCliente',
            model: 'clientes'
        }
    }
}, {
    timestamps: false,
    tableName: 'equipamentos'
})
module.exports = Equipamento