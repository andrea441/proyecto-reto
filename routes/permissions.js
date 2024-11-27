const express = require('express');
const router = express.Router();
const permisoController = require('../controllers/permissions');

// Obtener todos los permisos
router.get('/', permisoController.getPermisos);

// Crear un nuevo permiso
router.post('/', permisoController.createPermiso);

// Obtener un permiso por ID
router.get('/:id', permisoController.getPermisoById);

// Actualizar un permiso
router.put('/:id', permisoController.updatePermiso);

// Eliminar un permiso
router.delete('/:id', permisoController.deletePermiso);

module.exports = router;
