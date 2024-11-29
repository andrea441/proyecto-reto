const express = require('express');
const router = express.Router();
const historialUsuarioController = require('../controllers/userStories');

// Obtener todos los historiales de usuario
router.get('/', historialUsuarioController.getHistorialUsuarios);

// Crear un nuevo historial de usuario
router.post('/', historialUsuarioController.createHistorialUsuario);

// Obtener un historial de usuario por ID
router.get('/:id', historialUsuarioController.getHistorialUsuarioById);

// Actualizar un historial de usuario
router.put('/:id', historialUsuarioController.updateHistorialUsuario);

// Eliminar un historial de usuario
router.delete('/:id', historialUsuarioController.deleteHistorialUsuario);

module.exports = router;
