const sequelize = require("../config/database");

const Cliente = require('../models/Cliente')
const Orcamento = require('../models/Orcamento')
const Servico = require('../models/Servico')
const Tem = require('../models/Tem')
const TipoServico = require('../models/TipoServico')

sequelize.sync({
    // force: true
});

module.exports = {

    //Listar Orcamento
    async orcamento_listar(req, res) {
        await Orcamento.findAll({
            include: [{
                model: Tem,
                include: [{
                    model: Servico
                }]
            }, Cliente],
            order: [['id', 'DESC']],
        })
            .then((data) => {
                if (data == null)
                    return res.json({ success: false, message: "Ainda não foi gerado nenhum orçamento" })

                return res.json({ success: true, message: "Orcamentos enviados", data: data })
            })
            .catch(erro => {
                return res.json({ success: false, message: erro })
            })
    },

    //Encontrar Orcamento
    async orcamento_encontrar(req, res) {
        const { id } = req.params

        await Orcamento.findOne({
            where: { id: id },
            include: [{
                model: Tem,
                include: [{
                    model: Servico
                }]
            }, Cliente]
        })
            .then((data) => {
                if (data == null)
                    return res.json({ success: false, message: "Ainda não foi gerado este orçamento" })

                return res.json({ success: true, message: "Orcamento enviado", data: data })
            })
            .catch(erro => {
                return res.json({ success: false, message: erro })
            })
    },

    //Criar Orcamento
    async orcamento_criar(req, res) {
        const { idCliente, idServicos } = req.body

        const orcamento = await Orcamento.create({
            valor: 0
        })

        const servicos = idServicos.split(",")
        console.log(servicos.length)

        let valorFinalOrcamento = 0

        servicos.map(async (data, index) => {
            const servico = await Servico.findOne({ where: { id: data } })

            console.log(servico.valor)

            const tem = await Tem.create({
                servico_id: servico.id,
                orcamento_id: orcamento.id,
                valor: servico.valor
            })
                .then((data) => {
                    valorFinalOrcamento += parseFloat(data.valor)
                })

            if (servicos.length - 1 == index) {
                orcamento.valor = valorFinalOrcamento
                orcamento.cliente_id = idCliente

                await orcamento.save()
                    .then((data) => {
                        res.json({ success: true, message: "Criado com sucesso um novo Orçamento", data: data });
                    })
                    .catch(err => {
                        res.json({ success: false, message: err.message });
                    })
            }
        })
    },

    //update orcamento
    async orcamento_update(req, res) {
        const { orcamento_id } = req.params

        const { idServicos } = req.body //Mudar de houver mudança de valor no orçamento em especifico

        console.log(idServicos)

        await Tem.destroy({
            where: {
                orcamento_id: orcamento_id
            }
        })

        const servicos = idServicos.split(",")
        // console.log(servicos.length)

        let valorFinalOrcamento = 0

        servicos.map(async (data, index) => {
            const servico = await Servico.findOne({ where: { id: data } })

            console.log(servico.valor)

            await Tem.create({
                servico_id: servico.id,
                orcamento_id: orcamento_id,
                valor: servico.valor
            })
                .then((data) => {
                    valorFinalOrcamento += parseFloat(data.valor)
                })

            if (servicos.length - 1 == index) {
                const orcamento = await Orcamento.findOne({
                    where: { id: orcamento_id }
                })

                orcamento.valor = valorFinalOrcamento

                await orcamento.save()
                    .then((data) => {
                        res.json({ success: true, message: "Editado com sucesso Orçamento", data: data });
                    })
                    .catch(err => {
                        res.json({ success: false, message: err.message });
                    })
            }
        })

    }

    // //Listar Orçamentos
    // async orcamento_listar(req, res) {
    //     await Orcamento.findAll()
    //         .then((data) => {
    //             if (data == null)
    //                 return res.json({ success: false, message: "Ainda não foi gerado nenhum orçamento" })

    //             return res.json({ success: true, message: "Orcamentos enviados", data: data })
    //         })
    //         .catch(erro => {
    //             return res.json({success: false, message: erro})
    //         })
    // },

    // //Encontrar Orçamento
    // async orcamento_encontrar(req, res) {
    //     const { id } = req.params

    //     await Orcamento.findOne({
    //         where: {id: id}
    //     })
    //         .then((data) => {
    //             if (data == null)
    //                 return res.json({ success: false, message: "Orcamento não existe" })

    //             return res.json({ success: true, message: "Orcamento enviado", data: data })
    //         })
    //         .catch(erro => {
    //             return res.json({success: false, message: erro})
    //         })
    // },

}


// const controller = {};
// controller.orcamento_list = async (req, res) => {
//     const { id_cliente } = req.params;

//     await Orcamento.findAll({
//         where: { id_cliente: id_cliente },
//         include: [{
//             model: ItemOrcamento,
//             include: [{
//                 model: Orcamento,
//             }],
//             include: [{
//                 model: itemcategoriaServicos,
//                 include: [{
//                     model: Servicos,
//                 }]
//             }]
//         }, Cliente]
//     })
//         .then((data) => {
//             if (data != null)
//                 res.json({ sucess: true, message: "Encontrado" });
//             else
//                 res.json({ sucess: true, message: "Não existe" });
//         })
//         .catch(err => {
//             console.log("Erro no get: " + err);
//             res.json({ sucess: false, message: err.message });
//         })
// };

// controller.orcamento_create = async (req, res) => {
//     let info = {

//     }


// }

// module.exports = controller;
