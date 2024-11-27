const express = require('express');
const router = express.Router();
const retrospectivaController = require('../controllers/retrospectives');

// Obtener todas las retrospectivas
router.get('/', retrospectivaController.getRetrospectivas);

// Crear una nueva retrospectiva
router.post('/', retrospectivaController.createRetrospectiva);

// Obtener una retrospectiva por ID
router.get('/:id', retrospectivaController.getRetrospectivaById);

// Actualizar una retrospectiva
router.put('/:id', retrospectivaController.updateRetrospectiva);

// Eliminar una retrospectiva
router.delete('/:id', retrospectivaController.deleteRetrospectiva);

module.exports = router;
