const express = require('express');
const router = express.Router();
const rolController = require('../controllers/roles');

// Obtener todos los roles
router.get('/', rolController.getRoles);

// Crear un nuevo rol
router.post('/', rolController.createRol);

// Obtener un rol por ID
router.get('/:id', rolController.getRolById);

// Actualizar un rol
router.put('/:id', rolController.updateRol);

// Eliminar un rol
router.delete('/:id', rolController.deleteRol);

module.exports = router;
