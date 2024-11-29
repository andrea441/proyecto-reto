const mongoose = require('mongoose');
const HabilidadSchema = require('./ability');
const DomicilioSchema = require('./address');

const UsuarioSchema = new mongoose.Schema({
  usuario: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  redesSociales: [{ type: String, enum: ['FACEBOOK', 'GOOGLE', 'LINKEDIN'] }],
  RFC: { type: String },
  domicilio: DomicilioSchema, 
  habilidades: [HabilidadSchema], 
  rol: { type: mongoose.Schema.Types.ObjectId, ref: 'Rol' },
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
