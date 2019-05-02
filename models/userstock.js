const sequelize = require('./../database/sequelize')
const Sequelize = require('sequelize');
module.exports = sequelize.define('users_stock',{

  id: {
    field:'id',
    type: Sequelize.INTEGER,
    primaryKey:true
  },
  stock: {
    field:'stock',
    type: Sequelize.STRING
  }
},
{
  timestamps:false,
  tableName: 'users_stock'
});
