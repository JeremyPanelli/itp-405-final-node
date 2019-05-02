const sequelize = require('./../database/sequelize')
const Sequelize = require('sequelize');
module.exports = sequelize.define('stocks',{
  name: {
    field:'name',
    type: Sequelize.STRING,
    primaryKey:true
  }
},
  {
    timestamps:false
  }
);
