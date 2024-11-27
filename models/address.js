const mongoose = require('mongoose');

const DomicilioSchema = new mongoose.Schema({
  calle: { type: String, required: true },
  numero: { type: String, required: true },
  codigoPostal: { type: String, required: true },
  ciudad: { type: String, required: true },
  estado: { type: String, required: true },
  pais: { type: String, required: true },
});

module.exports = DomicilioSchema; 