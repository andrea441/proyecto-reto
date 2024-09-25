const express = require('express');

// Crear un nuevo usuario
function create(req, res, next) {
    res.send(`POST => /users/ => ${req.body.name}`);
}

// Listar todos los usuarios
function list(req, res, next) {
    res.send('GET => /users/');
}

// Obtener un usuario por ID
function index(req, res, next) {
    res.send(`GET => /users/${req.params.id}`);
}

// Reemplazar un usuario por ID
function replace(req, res, next) {
    res.send(`PUT => /users/${req.params.id}`);
}

// Actualizar parcialmente un usuario por ID
function update(req, res, next) {
    res.send(`PATCH => /users/${req.params.id}`);
}

// Eliminar un usuario por ID
function destroy(req, res, next) {
    res.send(`DELETE => /users/${req.params.id}`);
}

module.exports = { create, list, index, replace, update, destroy };
