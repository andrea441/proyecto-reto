const Release = require('../models/release');

exports.getReleases = async (req, res) => {
  try {
    const releases = await Release.find().populate('sprints');
    res.json(releases);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener releases' });
  }
};

exports.createRelease = async (req, res) => {
  try {
    const nuevaRelease = new Release(req.body);
    await nuevaRelease.save();
    res.status(201).json(nuevaRelease);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear la release' });
  }
};

exports.getReleaseById = async (req, res) => {
  try {
    const release = await Release.findById(req.params.id).populate('sprints');
    if (!release) return res.status(404).json({ error: 'Release no encontrada' });
    res.json(release);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la release' });
  }
};

exports.updateRelease = async (req, res) => {
  try {
    const releaseActualizada = await Release.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!releaseActualizada) return res.status(404).json({ error: 'Release no encontrada' });
    res.json(releaseActualizada);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar la release' });
  }
};

exports.deleteRelease = async (req, res) => {
  try {
    const releaseEliminada = await Release.findByIdAndDelete(req.params.id);
    if (!releaseEliminada) return res.status(404).json({ error: 'Release no encontrada' });
    res.json({ message: 'Release eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la release' });
  }
};
