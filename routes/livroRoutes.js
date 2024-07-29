const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

// Rotas CRUD para Livros
router.get('/livros', livroController.listarLivros);
router.post('/livros', livroController.criarLivro);
router.get('/livros/:id', livroController.buscarLivro);
router.put('/livros/:id', livroController.atualizarLivro);
router.delete('/livros/:id', livroController.deletarLivro);

module.exports = router;
