const mongoose = require('mongoose');
const HabilidadSchema = require('./ability');
const DomicilioSchema = require('./address');

const DeveloperSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  CURP: { type: String, required: true, unique: true },
  RFC: { type: String, required: true, unique: true },
  domicilio: DomicilioSchema, 
  habilidades: [HabilidadSchema], 
});

module.exports = mongoose.model('Developer', DeveloperSchema);
