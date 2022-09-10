//Ficheiro de ligação a base de dados
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "projecto",
  "postgres",
  "root",
  {
    host: "localhost",
    port: "5432",
    dialect: "postgres",
  }
);

module.exports = sequelize;