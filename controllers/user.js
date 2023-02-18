const  { response } = require('express');


const userGet = (req, res = response) => {

    const {q, nombre} = req.query;

    res.json({
        msg :' get API - controlador',
        q,
        nombre
    });  
}

const userPost = (req, res = response) =>{

    const body = req.body;

    res.json({
        msg :' post API - controlador',
        body
    });
}

const userPut = (req, res = response) =>{
    
    const id = req.params.id;

    res.json({
        msg :' put API - controlador',
        id
    });
}


const userDelete = (req, res = response) =>{
    res.json({
        msg :' delete API - controlador'
    });
}


  module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete
  }