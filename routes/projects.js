const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/projects');

// Obtener todos los proyectos
router.get('/', proyectoController.getProyectos);

// Crear un nuevo proyecto
router.post('/', proyectoController.createProyecto);

// Obtener un proyecto por ID
router.get('/:id', proyectoController.getProyectoById);

// Actualizar un proyecto
router.put('/:id', proyectoController.updateProyecto);

// Eliminar un proyecto
router.delete('/:id', proyectoController.deleteProyecto);

module.exports = router;
