// models/livro.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Livro = sequelize.define('Livro', {
  livro_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  editora: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  underscored: false,
  tableName: 'livros' 
});

module.exports = Livro;

