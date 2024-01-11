const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());

mongoose
  .connect("mongodb+srv://221262:winter1@cluster0.t9u8cw0.mongodb.net/Gatos")
  .then(() => {
    console.log("mongodb conectado");
  })
  .catch((error) => console.log(error));

const GatoRoute = require("./Routes/Gatos.route");
app.use("/gato", GatoRoute);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000....");
});
