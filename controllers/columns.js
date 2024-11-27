const Columna = require('../models/column');

exports.getColumnas = async (req, res) => {
  try {
    const columnas = await Columna.find().populate('historias');
    res.json(columnas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener columnas' });
  }
};

exports.createColumna = async (req, res) => {
  try {
    const nuevaColumna = new Columna(req.body);
    await nuevaColumna.save();
    res.status(201).json(nuevaColumna);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear la columna' });
  }
};

exports.getColumnaById = async (req, res) => {
  try {
    const columna = await Columna.findById(req.params.id).populate('historias');
    if (!columna) return res.status(404).json({ error: 'Columna no encontrada' });
    res.json(columna);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la columna' });
  }
};

exports.updateColumna = async (req, res) => {
  try {
    const columnaActualizada = await Columna.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!columnaActualizada) return res.status(404).json({ error: 'Columna no encontrada' });
    res.json(columnaActualizada);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar la columna' });
  }
};

exports.deleteColumna = async (req, res) => {
  try {
    const columnaEliminada = await Columna.findByIdAndDelete(req.params.id);
    if (!columnaEliminada) return res.status(404).json({ error: 'Columna no encontrada' });
    res.json({ message: 'Columna eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la columna' });
  }
};
