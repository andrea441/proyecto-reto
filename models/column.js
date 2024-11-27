const mongoose = require('mongoose');

const ColumnaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  historias: [{ type: mongoose.Schema.Types.ObjectId, ref: 'HistoriaUsuario' }],
});

module.exports = mongoose.model('Columna', ColumnaSchema);
