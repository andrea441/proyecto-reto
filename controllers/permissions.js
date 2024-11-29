const Permiso = require('../models/permission');

exports.getPermisos = async (req, res) => {
  try {
    const permisos = await Permiso.find();
    res.json(permisos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener permisos' });
  }
};

exports.createPermiso = async (req, res) => {
  try {
    const nuevoPermiso = new Permiso(req.body);
    await nuevoPermiso.save();
    res.status(201).json(nuevoPermiso);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el permiso' });
  }
};

exports.getPermisoById = async (req, res) => {
  try {
    const permiso = await Permiso.findById(req.params.id);
    if (!permiso) return res.status(404).json({ error: 'Permiso no encontrado' });
    res.json(permiso);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el permiso' });
  }
};

exports.updatePermiso = async (req, res) => {
  try {
    const permisoActualizado = await Permiso.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!permisoActualizado) return res.status(404).json({ error: 'Permiso no encontrado' });
    res.json(permisoActualizado);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el permiso' });
  }
};

exports.deletePermiso = async (req, res) => {
  try {
    const permisoEliminado = await Permiso.findByIdAndDelete(req.params.id);
    if (!permisoEliminado) return res.status(404).json({ error: 'Permiso no encontrado' });
    res.json({ message: 'Permiso eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el permiso' });
  }
};
