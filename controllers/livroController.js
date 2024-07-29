const Livro = require('../models/livro');

// Métodos do CRUD
exports.listarLivros = async (req, res) => {
  try {
    const livros = await Livro.findAll();
    res.json(livros);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os livros' });
  }
};

exports.criarLivro = async (req, res) => {
  const { nome, autor, editora } = req.body;
  try {
    const novoLivro = await Livro.create({ nome, autor, editora });
    res.json(novoLivro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar um novo livro' });
  }
};

exports.buscarLivro = async (req, res) => {
  const id = req.params.id;
  try {
    const livro = await Livro.findByPk(id);
    if (livro) {
      res.json(livro);
    } else {
      res.status(404).json({ message: 'Livro não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar o livro' });
  }
};

exports.atualizarLivro = async (req, res) => {
  const id = req.params.id;
  const { nome, autor, editora } = req.body;
  try {
    const livro = await Livro.findByPk(id);
    if (livro) {
      livro.nome = nome;
      livro.autor = autor;
      livro.editora = editora;
      await livro.save();
      res.json(livro);
    } else {
      res.status(404).json({ message: 'Livro não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o livro' });
  }
};

exports.deletarLivro = async (req, res) => {
  const id = req.params.id;
  try {
    const livro = await Livro.findByPk(id);
    if (livro) {
      await livro.destroy();
      res.json({ message: 'Livro deletado com sucesso' });
    } else {
      res.status(404).json({ message: 'Livro não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar o livro' });
  }
};
