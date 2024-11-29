const express = require('express');
const router = express.Router();
const developerController = require('../controllers/developers');

// Obtener todos los developers
router.get('/', developerController.getDevelopers);

// Crear un nuevo developer
router.post('/', developerController.createDeveloper);

// Obtener un developer por ID
router.get('/:id', developerController.getDeveloperById);

// Actualizar un developer
router.put('/:id', developerController.updateDeveloper);

// Eliminar un developer
router.delete('/:id', developerController.deleteDeveloper);

module.exports = router;
