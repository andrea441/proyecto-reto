const express = require('express');
const router = express.Router();
const sprintController = require('../controllers/sprints');

// Obtener todos los sprints
router.get('/', sprintController.getSprints);

// Crear un nuevo sprint
router.post('/', sprintController.createSprint);

// Obtener un sprint por ID
router.get('/:id', sprintController.getSprintById);

// Actualizar un sprint
router.put('/:id', sprintController.updateSprint);

// Eliminar un sprint
router.delete('/:id', sprintController.deleteSprint);

module.exports = router;
