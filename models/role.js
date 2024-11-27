const mongoose = require('mongoose');

const RolSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  permisos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Permiso' }],
});

module.exports = mongoose.model('Rol', RolSchema);
