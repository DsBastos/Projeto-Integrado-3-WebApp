const {Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Cliente = require('./Cliente')

const Orcamento = sequelize.define("orcamento", {
    data: {
        type: DataTypes.DATEONLY,
        defaultValue: new Date(),
        allowNull: false
    },
    valor: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},
{
    timestamps: false,
    tableName: "orcamentos"
})

//Um orcamento tem vários clientes
Cliente.hasMany(Orcamento, {
    foreignKey: 'cliente_id'
});
Orcamento.belongsTo(Cliente, {
    foreignKey: 'cliente_id'
});

module.exports = Orcamento