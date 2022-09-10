const {Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Orcamento = require('./Orcamento')
const Servico = require('./Servico')

const Tem = sequelize.define("tem", {
    valor: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},
{
    timestamps: false,
    tableName: "tem"
})

Servico.hasMany(Tem, {
    foreignKey: 'servico_id'
})

Tem.belongsTo(Servico, {
    foreignKey: 'servico_id'
})

Orcamento.hasMany(Tem, {
    foreignKey: 'orcamento_id'
})

Tem.belongsTo(Orcamento, {
    foreignKey: 'orcamento_id'
})

module.exports = Tem