const mongoose = require('mongoose');

const HistoriaUsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  prioridad: { type: String, enum: ['MEDIA', 'ALTA', 'BAJA'], required: true },
  tamaño: { type: Number, required: true },
  rol: { type: String, required: true },
  funcionalidad: { type: String, required: true },
  beneficio: { type: String, required: true },
  contexto: { type: String },
  evento: { type: String },
  resultado: { type: String },
  fibonacci: { type: Number },
  aprobación: { type: Boolean, default: false },
});

module.exports = mongoose.model('HistoriaUsuario', HistoriaUsuarioSchema);
