const {Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Cliente = sequelize.define("cliente", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contacto: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
},
{
    timestamps: false,
    tableName: "clientes"
})

module.exports = Cliente