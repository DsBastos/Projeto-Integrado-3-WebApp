const Admin = require("../models/adminModel");
const sequelize = require("../models/database");

const controller = {};
sequelize.sync();


//Função do controlador para listar os filmes
controller.admin_list = async (req, res) => {
  const data = await Admin.findAll()
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });
  res.json({ success: true, data: data });
};

//Função do controlador para criar os filmes
controller.admin_create = async (req, res) => {
  try {
    // data
    const {nome_admin, mail_admin, pass_admin } = req.body;
    // create
    const data = await Admin.create({
      nome_admin: nome_admin,
      mail_admin: mail_admin,
      pass_admin: pass_admin,
    })
      .then(function (data) {
        return data;
      })
      .catch((error) => {
        console.log("Erro: " + error);
        return error;
      });
    // return res
    res.status(200).json({
      success: true,
      message: "Admin criado com sucesso",
      data: data,
    });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
};

//Função do controlador para listar os campos de um filme especifico
controller.admin_detail = async (req, res) => {
  const { id_admin } = req.params;
  const data = await Admin.findAll({
    where: { id_admin: id_admin }
  })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });
  res.json({ success: true, data: data });
};

//Função do controlador para deletar um filme especifico
controller.admin_delete = async (req, res) => {
  // parâmetros por post
  const { id_admin } = req.body;
  // delete por sequelize
  const del = await Admin.destroy({
    where: { id_admin: id_admin },
  });
  res.json({ success: true, deleted: del, message: "Deletado com sucesso" });
};

//Função do controlador para atualizar um filme especifico
controller.admin_update = async (req, res) => {
  // parameter get id
  const { id_admin } = req.params;
  // parameter POST
  const { mail_admin, nome_admin, pass_admin } = req.body;
  // Update data
  const data = await Admin.update(
    {
        mail_admin: mail_admin,
        nome_admin: nome_admin,
        pass_admin: pass_admin,
    },
    {
      where: { id_admin: id_admin },
    }
  )
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });
  res.json({ success: true, data: data, message: "Updated successful" });
};

module.exports = controller;
