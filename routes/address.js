const express = require('express');
const router = express.Router();
const domicilioController = require('../controllers/address');

// Obtener todos los domicilios
router.get('/', domicilioController.getDomicilios);

// Crear un nuevo domicilio
router.post('/', domicilioController.createDomicilio);

// Obtener un domicilio por ID
router.get('/:id', domicilioController.getDomicilioById);

// Actualizar un domicilio
router.put('/:id', domicilioController.updateDomicilio);

// Eliminar un domicilio
router.delete('/:id', domicilioController.deleteDomicilio);

module.exports = router;
