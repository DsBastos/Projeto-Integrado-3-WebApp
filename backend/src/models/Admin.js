//Ficheiro de criação das tabelas e seus respetivos campos, utilizando o sequelize
const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Admin = sequelize.define(
  "admins",
  {
    id_admin: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome_admin: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor introduza um nome",
        },
      },
    },
    mail_admin: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Por favor introduza uma mail",
        },
      },
    },
    pass_admin: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor introduza uma palavra-passe",
        },
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Admin;