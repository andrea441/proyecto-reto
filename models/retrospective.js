const mongoose = require('mongoose');

const RetrospectivaSchema = new mongoose.Schema({
  release: { type: mongoose.Schema.Types.ObjectId, ref: 'Release' },
  fecha: { type: Date, required: true },
  comentario: { type: String },
});

module.exports = mongoose.model('Retrospectiva', RetrospectivaSchema);
