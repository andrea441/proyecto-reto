const express = require('express');
const router = express.Router();
const releaseController = require('../controllers/releases');

// Obtener todos los releases
router.get('/', releaseController.getReleases);

// Crear un nuevo release
router.post('/', releaseController.createRelease);

// Obtener un release por ID
router.get('/:id', releaseController.getReleaseById);

// Actualizar un release
router.put('/:id', releaseController.updateRelease);

// Eliminar un release
router.delete('/:id', releaseController.deleteRelease);

module.exports = router;
