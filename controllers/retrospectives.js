const Retrospectiva = require('../models/retrospective');

exports.getRetrospectivas = async (req, res) => {
  try {
    const retrospectivas = await Retrospectiva.find().populate('release');
    res.json(retrospectivas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener retrospectivas' });
  }
};

exports.createRetrospectiva = async (req, res) => {
  try {
    const nuevaRetrospectiva = new Retrospectiva(req.body);
    await nuevaRetrospectiva.save();
    res.status(201).json(nuevaRetrospectiva);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear la retrospectiva' });
  }
};

exports.getRetrospectivaById = async (req, res) => {
  try {
    const retrospectiva = await Retrospectiva.findById(req.params.id).populate('release');
    if (!retrospectiva) return res.status(404).json({ error: 'Retrospectiva no encontrada' });
    res.json(retrospectiva);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la retrospectiva' });
  }
};

exports.updateRetrospectiva = async (req, res) => {
  try {
    const retrospectivaActualizada = await Retrospectiva.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!retrospectivaActualizada) return res.status(404).json({ error: 'Retrospectiva no encontrada' });
    res.json(retrospectivaActualizada);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar la retrospectiva' });
  }
};

exports.deleteRetrospectiva = async (req, res) => {
  try {
    const retrospectivaEliminada = await Retrospectiva.findByIdAndDelete(req.params.id);
    if (!retrospectivaEliminada) return res.status(404).json({ error: 'Retrospectiva no encontrada' });
    res.json({ message: 'Retrospectiva eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la retrospectiva' });
  }
};
