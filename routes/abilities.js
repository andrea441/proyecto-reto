const express = require('express');
const router = express.Router();
const habilidadController = require('../controllers/abilities');

// Obtener todas las habilidades
router.get('/', habilidadController.getHabilidades);

// Crear una nueva habilidad
router.post('/', habilidadController.createHabilidad);

// Obtener una habilidad por ID
router.get('/:id', habilidadController.getHabilidadById);

// Actualizar una habilidad
router.put('/:id', habilidadController.updateHabilidad);

// Eliminar una habilidad
router.delete('/:id', habilidadController.deleteHabilidad);

module.exports = router;
