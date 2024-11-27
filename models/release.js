const mongoose = require('mongoose');

const ReleaseSchema = new mongoose.Schema({
  fechaInicio: { type: Date, required: true },
  fechaFinal: { type: Date, required: true },
  sprints: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sprint' }],
});

module.exports = mongoose.model('Release', ReleaseSchema);
