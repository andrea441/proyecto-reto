const express = require('express');
const router = express.Router();
const historiaController = require('../controllers/userStories');

// Obtener todos los historiales de usuario
router.get('/', historiaController.getHistorias);

// Crear un nuevo historial de usuario
router.post('/', historiaController.createHistoria);

// Obtener un historial de usuario por ID
router.get('/:id', historiaController.getHistoriaById);

// Actualizar un historial de usuario
router.put('/:id', historiaController.updateHistoria);

// Eliminar un historial de usuario
router.delete('/:id', historiaController.deleteHistoria);

module.exports = router;
