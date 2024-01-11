const express = require("express");
const router = express.Router();
const GatoSchema = require("../models/gato.model");

router.get("/obtener", (req, res) => {
  GatoSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.post("/crear", async (req, res) => {
  try {
    console.log(req.body);
    const Gato = new GatoSchema(req.body);
    const result = await Gato.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/borrar/:id", (req, res) => {
  const { id } = req.params;
  GatoSchema.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
