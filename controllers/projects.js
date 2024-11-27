const Proyecto = require('../models/project');

exports.getProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find()
      .populate('projectManager')
      .populate('productOwner')
      .populate('equipoDeveloper')
      .populate('tablero');
    res.json(proyectos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener proyectos' });
  }
};

exports.createProyecto = async (req, res) => {
  try {
    const nuevoProyecto = new Proyecto(req.body);
    await nuevoProyecto.save();
    res.status(201).json(nuevoProyecto);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el proyecto' });
  }
};

exports.getProyectoById = async (req, res) => {
  try {
    const proyecto = await Proyecto.findById(req.params.id)
      .populate('projectManager')
      .populate('productOwner')
      .populate('equipoDeveloper')
      .populate('tablero');
    if (!proyecto) return res.status(404).json({ error: 'Proyecto no encontrado' });
    res.json(proyecto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el proyecto' });
  }
};

exports.updateProyecto = async (req, res) => {
  try {
    const proyectoActualizado = await Proyecto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!proyectoActualizado) return res.status(404).json({ error: 'Proyecto no encontrado' });
    res.json(proyectoActualizado);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el proyecto' });
  }
};

exports.deleteProyecto = async (req, res) => {
  try {
    const proyectoEliminado = await Proyecto.findByIdAndDelete(req.params.id);
    if (!proyectoEliminado) return res.status(404).json({ error: 'Proyecto no encontrado' });
    res.json({ message: 'Proyecto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el proyecto' });
  }
};
