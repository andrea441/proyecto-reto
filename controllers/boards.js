const Tablero = require('../models/board');

exports.getTableros = async (req, res) => {
  try {
    const tableros = await Tablero.find()
      .populate('columnaProductBacklog')
      .populate('columnasReleaseBacklog');
    res.json(tableros);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener tableros' });
  }
};

exports.createTablero = async (req, res) => {
  try {
    const nuevoTablero = new Tablero(req.body);
    await nuevoTablero.save();
    res.status(201).json(nuevoTablero);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el tablero' });
  }
};

exports.getTableroById = async (req, res) => {
  try {
    const tablero = await Tablero.findById(req.params.id)
      .populate('columnaProductBacklog')
      .populate('columnasReleaseBacklog');
    if (!tablero) return res.status(404).json({ error: 'Tablero no encontrado' });
    res.json(tablero);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el tablero' });
  }
};

exports.updateTablero = async (req, res) => {
  try {
    const tableroActualizado = await Tablero.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tableroActualizado) return res.status(404).json({ error: 'Tablero no encontrado' });
    res.json(tableroActualizado);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el tablero' });
  }
};

exports.deleteTablero = async (req, res) => {
  try {
    const tableroEliminado = await Tablero.findByIdAndDelete(req.params.id);
    if (!tableroEliminado) return res.status(404).json({ error: 'Tablero no encontrado' });
    res.json({ message: 'Tablero eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el tablero' });
  }
};
