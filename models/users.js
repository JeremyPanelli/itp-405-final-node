const sequelize = require('./../database/sequelize')
const Sequelize = require('sequelize');
module.exports = sequelize.define('users',{
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
  email: {
    field:'email',
    type: Sequelize.STRING,
    validate: {
      isEmail: {
        args: true,
        msg: 'Email must be an email'
      }
    }
  }
},
{
  timestamps:false,
  tableName: 'users'
});
