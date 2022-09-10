const sequelize = require("../config/database");

const Servico = require("../models/Servico")

module.exports = {

    //Listar servicos
    async servico_listar(req,res) {
        await Servico.findAll({
            order: ["id"]
        })
        .then((data) => {    
            return res.json({ success: true, message: "Servicos enviados", data: data })
          })
          .catch(erro => {
            return res.json({ success: false, message: erro })
          })
    },

    //Update servicos
    async servico_update(req,res) {
        const { id } = req.params

        const { valor } = req.body

        await Servico.update({
            valor: valor
        },
        {
            where: {
                id: id
            }
        })
        .then((data) => {
            console.log(data)
            res.json({ success: true, message: "Servico atualizado", data: data });
        })
        .catch(err => {
            res.json({ success: false, message: err.message });
        })
    }

}
