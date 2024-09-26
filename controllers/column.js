const express = require('express');

function list(req, res) {
  const page = req.params.page ? req.params.page : 1;

  res.status(200).json({
    message: 'Listado de columnas recuperado con éxito',
    objs: [], 
    page: page
  });
}

function index(req, res) {
  const id = req.params.id;

  res.status(200).json({
    message: 'Columna encontrada con éxito',
    objs: {} 
  });
}

function create(req, res) {
  const column = {
    name: req.body.name,
    projectId: req.body.projectId
  };

  res.status(200).json({
    message: 'Columna creada con éxito',
    objs: column
  });
}

function update(req, res) {
  const id = req.params.id;
  const column = {};

  if (req.body.name) column.name = req.body.name;
  if (req.body.projectId) column.projectId = req.body.projectId;

  res.status(200).json({
    message: 'Columna actualizada con éxito',
    objs: { id, ...column }
  });
}

function destroy(req, res) {
  const id = req.params.id;

  res.status(200).json({
    message: 'Columna eliminada con éxito',
    objs: { id }
  });
}

module.exports = {
  list,
  index,
  create,
  update,
  destroy
};
