const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres', 
  username: 'postgres.hnzivpqgschwyvursdzl',
  password: 'HcXH62mbrZ46SxkS',
  database: 'postgres',
  host: 'aws-0-sa-east-1.pooler.supabase.com',
  port: 5432,
});

module.exports = sequelize;
