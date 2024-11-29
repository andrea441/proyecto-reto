const Developer = require('../models/developer');

exports.getDevelopers = async (req, res) => {
  try {
    const developers = await Developer.find();
    res.json(developers);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los developers' });
  }
};

exports.createDeveloper = async (req, res) => {
  try {
    const newDeveloper = new Developer(req.body);
    await newDeveloper.save();
    res.status(201).json(newDeveloper);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el developer' });
  }
};

exports.getDeveloperById = async (req, res) => {
  try {
    const developer = await Developer.findById(req.params.id);
    if (!developer) return res.status(404).json({ error: 'Developer no encontrado' });
    res.json(developer);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el developer' });
  }
};

exports.updateDeveloper = async (req, res) => {
  try {
    const updatedDeveloper = await Developer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDeveloper) return res.status(404).json({ error: 'Developer no encontrado' });
    res.json(updatedDeveloper);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el developer' });
  }
};

exports.deleteDeveloper = async (req, res) => {
  try {
    const deletedDeveloper = await Developer.findByIdAndDelete(req.params.id);
    if (!deletedDeveloper) return res.status(404).json({ error: 'Developer no encontrado' });
    res.json({ message: 'Developer eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el developer' });
  }
};
