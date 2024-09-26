const express = require('express');

function signup(req, res) {
  const user = {
    name: req.body.name,
    birthdate: req.body.birthdate,
    curp: req.body.curp,
    rfc: req.body.rfc,
    address: req.body.address,
    skillList: req.body.skillList,
    email: req.body.email,
    password: req.body.password 
  };

  if (Object.values(user).some(value => value === '')) {
    res.status(400).json({
      message: 'Algunos campos están vacíos',
      obj: {}
    });
  } else {
 
    res.status(200).json({
      message: 'Registro exitoso',
      objs: user 
    });
  }
}

function login(req, res) {
  const email = req.body.email;
  const password = req.body.password;

 
  if (email && password) { 
    res.status(200).json({
      message: 'Login exitoso',
      objs: {
        id: "user_id_placeholder"  
      }
    });
  } else {
    res.status(403).json({
      message: 'Login fallido'
    });
  }
}

module.exports = {
  signup,
  login
};

