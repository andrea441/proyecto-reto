const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/users');

// Obtener todos los usuarios
router.get('/', usuarioController.getUsuarios);

// Crear un nuevo usuario
router.post('/', usuarioController.createUsuario);

// Obtener un usuario por ID
router.get('/:id', usuarioController.getUsuarioById);

// Actualizar un usuario
router.put('/:id', usuarioController.updateUsuario);

// Eliminar un usuario
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;
