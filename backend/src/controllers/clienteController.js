const sequelize = require("../config/database");

const Cliente = require('../models/Cliente')
const Orcamento = require("../models/Orcamento")
const Tem = require("../models/Tem")
const Servicos = require("../models/Servico")

module.exports = {

  //Listar Clientes
  async cliente_list(req,res) {
    await Cliente.findAll({
      include: [{
        model: Orcamento,
        include: [{
          model: Tem,
          include: Servicos
        }]
      }],
      order:[['id', 'DESC']],
    })
      .then((data) => {
        if(data == "")
          return res.json({ success: false, message: "Ainda nenhum cliente gerou um orçamento" })

        return res.json({ success: true, message: "Clientes enviados", data: data })
      })
      .catch(erro => {
        return res.json({ success: false, message: erro })
      })
  },

  //Listar 3 Clientes
  async cliente_list3(req,res) {
    await Cliente.findAll({
      order: [
        ['id', 'DESC'],
      ],
      limit: 3,
      include: [{
        model: Orcamento,
        include: [{
          model: Tem,
          include: Servicos
        }]
      }]
    })
      .then((data) => {
        if(data == "")
          return res.json({ success: false, message: "Ainda nenhum cliente gerou um orçamento" })

        return res.json({ success: true, message: "Clientes enviados", data: data })
      })
      .catch(erro => {
        return res.json({ success: false, message: erro })
      })
  },

  //Encontrar Cliente
  async cliente_encontrar(req,res) {
    const { id } = req.params

    await Cliente.findOne({
      where: {id: id},
      include: [{
        model: Orcamento,
        include: [{
          model: Tem,
          include: Servicos
        }]
      }]
    })
      .then((data) => {
        if(data === null)
          return res.json({ success: false, message: "CLiente ainda ainda não existe" })

        return res.json({ success: true, message: "Cliente enviado", data: data })
      })
      .catch(erro => {
        return res.json({ success: false, message: erro })
      })
  },

  //Criar Cliente
  async cliente_criar(req,res) {
    const { nome, email, contacto } = req.body

    await Cliente.create({
      nome: nome,
      email: email,
      contacto: contacto,
    })
      .then((data) => {
        return res.json({ success: true, message: "Cliente criado com sucesso", data: data })
      })
      .catch(erro => {
        return res.json({ success: false, message: erro })
      })
  }

}