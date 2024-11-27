const Rol = require('../models/Rol');

exports.getRoles = async (req, res) => {
  try {
    const roles = await Rol.find().populate('permiso');
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener roles' });
  }
};

exports.createRol = async (req, res) => {
  try {
    const nuevoRol = new Rol(req.body);
    await nuevoRol.save();
    res.status(201).json(nuevoRol);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el rol' });
  }
};

exports.getRolById = async (req, res) => {
  try {
    const rol = await Rol.findById(req.params.id).populate('permiso');
    if (!rol) return res.status(404).json({ error: 'Rol no encontrado' });
    res.json(rol);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el rol' });
  }
};

exports.updateRol = async (req, res) => {
  try {
    const rolActualizado = await Rol.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!rolActualizado) return res.status(404).json({ error: 'Rol no encontrado' });
    res.json(rolActualizado);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el rol' });
  }
};

exports.deleteRol = async (req, res) => {
  try {
    const rolEliminado = await Rol.findByIdAndDelete(req.params.id);
    if (!rolEliminado) return res.status(404).json({ error: 'Rol no encontrado' });
    res.json({ message: 'Rol eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el rol' });
  }
};
