const Sprint = require('../models/Sprint');

exports.getSprints = async (req, res) => {
  try {
    const sprints = await Sprint.find().populate('backlog');
    res.json(sprints);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener sprints' });
  }
};

exports.createSprint = async (req, res) => {
  try {
    const nuevoSprint = new Sprint(req.body);
    await nuevoSprint.save();
    res.status(201).json(nuevoSprint);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el sprint' });
  }
};

exports.getSprintById = async (req, res) => {
  try {
    const sprint = await Sprint.findById(req.params.id).populate('backlog');
    if (!sprint) return res.status(404).json({ error: 'Sprint no encontrado' });
    res.json(sprint);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el sprint' });
  }
};

exports.updateSprint = async (req, res) => {
  try {
    const sprintActualizado = await Sprint.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!sprintActualizado) return res.status(404).json({ error: 'Sprint no encontrado' });
    res.json(sprintActualizado);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el sprint' });
  }
};

exports.deleteSprint = async (req, res) => {
  try {
    const sprintEliminado = await Sprint.findByIdAndDelete(req.params.id);
    if (!sprintEliminado) return res.status(404).json({ error: 'Sprint no encontrado' });
    res.json({ message: 'Sprint eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el sprint' });
  }
};
