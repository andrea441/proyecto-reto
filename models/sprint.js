const mongoose = require('mongoose');

const SprintSchema = new mongoose.Schema({
  backlog: { type: mongoose.Schema.Types.ObjectId, ref: 'Columna' },
  fechaInicio: { type: Date, required: true },
  fechaFin: { type: Date, required: true },
});

module.exports = mongoose.model('Sprint', SprintSchema);
