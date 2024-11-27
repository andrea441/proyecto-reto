const mongoose = require('mongoose');

const PermisoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
});

module.exports = mongoose.model('Permiso', PermisoSchema);
