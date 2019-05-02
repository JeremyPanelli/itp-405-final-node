const sequelize = require('./../database/sequelize')
const Sequelize = require('sequelize');
module.exports = sequelize.define('users_stock',{

  id: {
    field:'id',
    type: Sequelize.INTEGER,
    primaryKey:true,
    validate: {
      isNumeric: {
        args: true,
        msg: 'Id must be a Number'
      }
    }
  },
  stock: {
    field:'stock',
    type: Sequelize.STRING,
    validate: {
      isAlpha: {
        args: true,
        msg: 'Stock must be a String'
      }
    }
  }
},
{
  timestamps:false,
  tableName: 'users_stock'
});
