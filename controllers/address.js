const Domicilio = require('../models/address');

exports.getDomicilios = async (req, res) => {
  try {
    const domicilios = await Domicilio.find();
    res.json(domicilios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los domicilios' });
  }
};

exports.createDomicilio = async (req, res) => {
  try {
    const nuevoDomicilio = new Domicilio(req.body);
    await nuevoDomicilio.save();
    res.status(201).json(nuevoDomicilio);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el domicilio' });
  }
};

exports.getDomicilioById = async (req, res) => {
  try {
    const domicilio = await Domicilio.findById(req.params.id);
    if (!domicilio) return res.status(404).json({ error: 'Domicilio no encontrado' });
    res.json(domicilio);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el domicilio' });
  }
};

exports.updateDomicilio = async (req, res) => {
  try {
    const domicilioActualizado = await Domicilio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!domicilioActualizado) return res.status(404).json({ error: 'Domicilio no encontrado' });
    res.json(domicilioActualizado);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el domicilio' });
  }
};

exports.deleteDomicilio = async (req, res) => {
  try {
    const domicilioEliminado = await Domicilio.findByIdAndDelete(req.params.id);
    if (!domicilioEliminado) return res.status(404).json({ error: 'Domicilio no encontrado' });
    res.json({ message: 'Domicilio eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el domicilio' });
  }
};
