const mongoose = require( 'mongoose');

const HabilidadSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  nivel: {
    type: String,
    enum: ['JUNIOR', 'SENIOR', 'MASTER'],
    required: true,
  },
});

module.exports = HabilidadSchema; 
