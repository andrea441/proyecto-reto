const mongoose = require('mongoose');

const TableroSchema = new mongoose.Schema({
  columnaProductBacklog: { type: mongoose.Schema.Types.ObjectId, ref: 'Columna' },
  columnasReleaseBacklog: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Columna' }],
});

module.exports = mongoose.model('Tablero', TableroSchema);
