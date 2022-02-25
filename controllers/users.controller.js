const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {

    const {page = 1, limit = 10} = req.query;

    res.json({
        msg: 'Api Get - Controller',
        page,
        limit
    });
}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'Api Post - Controller',
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'Api Put - Controller',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Api Patch - Controller'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Api Delete - Controller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}
