const mongoose = require("mongoose");
const GatoSchema = mongoose.Schema(
  {
    Nombre: {
      type: String,
      required: true,
    },
    Raza: {
      type: String,
      required: true,
    },
    Pelaje: {
      type: String,
      required: true,
    },
    Color: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

module.exports = mongoose.model("Gato", GatoSchema);
