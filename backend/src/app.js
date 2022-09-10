const express = require("express");
const cors = require('cors')
const app = express();

//con0figurações das portas e caminhos
app.set("port", process.env.port || 3000);

//middlewares
app.use(express.json());

// Configurar CORS - O que permite o acesso do axios a api
app.use(cors())

app.use(express.urlencoded({ extended: true }));

// // importação de rotas
// const backofficeRouters = require("./routes/backofficeRoutes.js");
const clienteRouters = require("./routes/clienteRoutes");
const orcamentoRouters = require("./routes/orcamentoRoutes")
const servicosRouters = require("./routes/servicosRoutes")

app.use("/Cliente", clienteRouters);
app.use("/Orcamento", orcamentoRouters);
app.use("/Servicos", servicosRouters);

app.get("/", (req,res) => {
  res.send("Rota teste")
})

app.listen(app.get("port"), () => {
  console.log("Servidor iniciado na porta: " + app.get("port"));
});
