const mongoose = require('mongoose');

const DeveloperSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  CURP: { type: String, required: true, unique: true },
  RFC: { type: String, required: true, unique: true },
  domicilio: { type: DomicilioSchema, required: true },
  habilidades: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Habilidad' }],
});

module.exports = mongoose.model('Developer', DeveloperSchema);
