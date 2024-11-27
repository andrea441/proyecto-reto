const Habilidad = require('../models/ability');

exports.getHabilidades = async (req, res) => {
  try {
    const habilidades = await Habilidad.find();
    res.json(habilidades);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las habilidades' });
  }
};

exports.createHabilidad = async (req, res) => {
  try {
    const nuevaHabilidad = new Habilidad(req.body);
    await nuevaHabilidad.save();
    res.status(201).json(nuevaHabilidad);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear la habilidad' });
  }
};

exports.getHabilidadById = async (req, res) => {
  try {
    const habilidad = await Habilidad.findById(req.params.id);
    if (!habilidad) return res.status(404).json({ error: 'Habilidad no encontrada' });
    res.json(habilidad);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la habilidad' });
  }
};

exports.updateHabilidad = async (req, res) => {
  try {
    const habilidadActualizada = await Habilidad.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!habilidadActualizada) return res.status(404).json({ error: 'Habilidad no encontrada' });
    res.json(habilidadActualizada);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar la habilidad' });
  }
};

exports.deleteHabilidad = async (req, res) => {
  try {
    const habilidadEliminada = await Habilidad.findByIdAndDelete(req.params.id);
    if (!habilidadEliminada) return res.status(404).json({ error: 'Habilidad no encontrada' });
    res.json({ message: 'Habilidad eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la habilidad' });
  }
};
