const {Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TipoServico = sequelize.define("tipo_servico", {
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    timestamps: false,
    tableName: "tipo_servicos"
})

module.exports = TipoServico