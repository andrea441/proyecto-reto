const express = require('express');
const router = express.Router();
const tableroController = require('../controllers/boards');

// Obtener todos los tableros
router.get('/', tableroController.getTableros);

// Crear un nuevo tablero
router.post('/', tableroController.createTablero);

// Obtener un tablero por ID
router.get('/:id', tableroController.getTableroById);

// Actualizar un tablero
router.put('/:id', tableroController.updateTablero);

// Eliminar un tablero
router.delete('/:id', tableroController.deleteTablero);

module.exports = router;
