var express = require('express');
var router = express.Router();

// Importar el controlador de usuarios
var usersController = require('../controllers/users');

// Definir las rutas utilizando las funciones del controlador

// Ruta para listar todos los usuarios
router.get('/', usersController.list);

// Ruta para obtener un usuario por su ID
router.get('/:id', usersController.index);

// Ruta para crear un nuevo usuario
router.post('/', usersController.create);

// Ruta para reemplazar un usuario por su ID
router.put('/:id', usersController.replace);

// Ruta para actualizar parcialmente un usuario por su ID
router.patch('/:id', usersController.update);

// Ruta para eliminar un usuario por su ID
router.delete('/:id', usersController.destroy);

module.exports = router;
