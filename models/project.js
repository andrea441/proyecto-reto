const mongoose = require('mongoose');

const ProyectoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fechaSolicitud: { type: Date, required: true },
  fechaArranque: { type: Date, required: true },
  descripcion: { type: String, required: true },
  projectManager: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  productOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  equipoDeveloper: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }],
  tablero: { type: mongoose.Schema.Types.ObjectId, ref: 'Tablero' },
});

module.exports = mongoose.model('Proyecto', ProyectoSchema);
