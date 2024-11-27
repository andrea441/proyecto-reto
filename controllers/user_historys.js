const HistoriaUsuario = require('../models/user_history');

exports.getHistorias = async (req, res) => {
  try {
    const historias = await HistoriaUsuario.find();
    res.json(historias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener historias de usuario' });
  }
};

exports.createHistoria = async (req, res) => {
  try {
    const nuevaHistoria = new HistoriaUsuario(req.body);
    await nuevaHistoria.save();
    res.status(201).json(nuevaHistoria);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear la historia de usuario' });
  }
};

exports.getHistoriaById = async (req, res) => {
  try {
    const historia = await HistoriaUsuario.findById(req.params.id);
    if (!historia) return res.status(404).json({ error: 'Historia de usuario no encontrada' });
    res.json(historia);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la historia de usuario' });
  }
};

exports.updateHistoria = async (req, res) => {
  try {
    const historiaActualizada = await HistoriaUsuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!historiaActualizada) return res.status(404).json({ error: 'Historia de usuario no encontrada' });
    res.json(historiaActualizada);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar la historia de usuario' });
  }
};

exports.deleteHistoria = async (req, res) => {
  try {
    const historiaEliminada = await HistoriaUsuario.findByIdAndDelete(req.params.id);
    if (!historiaEliminada) return res.status(404).json({ error: 'Historia de usuario no encontrada' });
    res.json({ message: 'Historia de usuario eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la historia de usuario' });
  }
};
