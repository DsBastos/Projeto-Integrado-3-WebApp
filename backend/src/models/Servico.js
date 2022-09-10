const {Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TipoServico = require('./TipoServico')

const Servico = sequelize.define("servico", {
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},
{
    timestamps: false,
    tableName: "servicos"
})

//Um tipo serviço tem vários servicos
TipoServico.hasMany(Servico, {
    foreignKey: 'tipo_servico_id'
});
Servico.belongsTo(TipoServico, {
    foreignKey: 'tipo_servico_id'
});

module.exports = Servico