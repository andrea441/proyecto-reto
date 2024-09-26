const express = require('express');

function list(req, res) {
  const page = req.params.page ? req.params.page : 1;

  res.status(200).json({
    message: 'Usuarios recuperados con éxito',
    objs: [], 
    page: page
  });
}

function index(req, res) {
  const id = req.params.id;
  res.status(200).json({
    message: 'Usuario encontrado con éxito',
    objs: {}  
  });
}

function update(req, res) {
  const id = req.params.id;

  const updatedUser = {};
  if (req.body.name) updatedUser.name = req.body.name;
  if (req.body.birthdate) updatedUser.birthdate = req.body.birthdate;
  if (req.body.curp) updatedUser.curp = req.body.curp;
  if (req.body.rfc) updatedUser.rfc = req.body.rfc;
  if (req.body.address) updatedUser.address = req.body.address;
  if (req.body.email) updatedUser.email = req.body.email;
  if (req.body.password) updatedUser.password = req.body.password;

  res.status(200).json({
    message: 'Usuario actualizado con éxito',
    objs: updatedUser  
  });
}

function destroy(req, res) {
  const id = req.params.id;

  res.status(200).json({
    message: 'Usuario eliminado con éxito',
    objs: { id }  
  });
}

module.exports = {
  list,
  index,
  update,
  destroy
};
