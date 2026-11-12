const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Inspecao = db.define('inspecao', {
    codInspecao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: DataTypes.ENUM('PENDENTE', 'REALIZADA'),
        allowNull: false
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    idEquipamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key: 'codEquipamento',
            model: 'equipamentos'
        }
    }
}, {
    timestamps: false,
    tableName: 'inspecoes'
})
module.exports = Inspecao