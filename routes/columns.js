const express = require('express');
const router = express.Router();
const columnaController = require('../controllers/columns');

// Obtener todas las columnas
router.get('/', columnaController.getColumnas);

// Crear una nueva columna
router.post('/', columnaController.createColumna);

// Obtener una columna por ID
router.get('/:id', columnaController.getColumnaById);

// Actualizar una columna
router.put('/:id', columnaController.updateColumna);

// Eliminar una columna
router.delete('/:id', columnaController.deleteColumna);

module.exports = router;
