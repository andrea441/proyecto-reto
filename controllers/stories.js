const express = require('express');

function list(req, res) {
  const page = req.query.page ? req.query.page : 1;

  res.status(200).json({
    message: 'Historias recuperadas con éxito',
    objs: [],  
    page: page
  });
}

function create(req, res) {
  const story = {
    name: req.body.name,
    role: req.body.role,
    functionality: req.body.functionality,
    benefit: req.body.benefit,
    priority: req.body.priority,
    size: req.body.size,
    criteriaContext: req.body.criteriaContext,
    criteriaList: req.body.criteriaList,
    columnId: req.body.columnId,
  };

  res.status(201).json({
    message: 'Historia creada con éxito',
    objs: story  
  });
}

function index(req, res) {
  const id = req.params.id;

  res.status(200).json({
    message: 'Historia encontrada con éxito',
    objs: {}  
  });
}

function update(req, res) {
  const id = req.params.id;

  const updatedStory = {};
  if (req.body.name) updatedStory.name = req.body.name;
  if (req.body.role) updatedStory.role = req.body.role;
  if (req.body.functionality) updatedStory.functionality = req.body.functionality;
  if (req.body.benefit) updatedStory.benefit = req.body.benefit;
  if (req.body.priority) updatedStory.priority = req.body.priority;
  if (req.body.size) updatedStory.size = req.body.size;
  if (req.body.criteriaContext) updatedStory.criteriaContext = req.body.criteriaContext;
  if (req.body.criteriaList) updatedStory.criteriaList = req.body.criteriaList;
  if (req.body.columnId) updatedStory.columnId = req.body.columnId;

  res.status(200).json({
    message: 'Historia actualizada con éxito',
    objs: updatedStory 
  });
}

function destroy(req, res) {
  const id = req.params.id;

  res.status(200).json({
    message: 'Historia eliminada con éxito',
    objs: { id }  
  });
}

module.exports = {
  list,
  create,
  update,
  destroy,
  index
};

