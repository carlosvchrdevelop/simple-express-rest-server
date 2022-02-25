const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete } = require('../controllers/users.controller');

const router = Router();

router.get('/:id', usuariosGet);

router.post('/', usuariosPost);

router.put('/:id', usuariosPut);

router.patch('/:id', usuariosPatch);

router.delete('/:id', usuariosDelete);

module.exports = router;