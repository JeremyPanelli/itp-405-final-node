const express = require('express');
const bodyParser = require('body-parser');
let app = express();
const Sequelize = require('sequelize');
let db = 'database.sqlite';
const {Op} = Sequelize;
app.use(bodyParser.json());
const UserStock = require('./models/userstock');
const Users = require('./models/users');
const Stocks = require('./models/stocks');

app.get('/api/userstock', async function(request, response){
  await UserStock.findAll().then((userstock)=>{
    if(userstock){
      response.json(userstock);
    }else {
      response.status(404).send();
    }
  });
});

app.get('/api/stock', async function(request, response){
  await Stocks.findAll().then((stock)=>{
    if(stock){
      response.json(stock);
    }else {
      response.status(404).send();
    }
  });
});

app.get('/api/users', async function(request, response){
  await Users.findAll().then((users)=>{
    if(users){
      response.json(users);
    }else {
      response.status(404).send();
    }
  });
});

app.get('/api/users/:userstock', async function(request, response){
  let userstock = parseInt(request.params.userstock);
  await UserStock.findAll({where:{
    id: userstock
  }})
  .then(function (stock){
    if(stock){
      response.json(stock).send();
    }else {
      response.status(404).send();
    }
  });
});

app.post('/api/users/:id/:stock', function(request, response){
  let stock = request.params.stock;
  let id = parseInt(request.params.id);
  UserStock.create({
    id: request.params.id,
    stock: request.params.stock
  }).then((created)=>{
    response.json(created);
  }, (validation) => {
    response.status(422).json({
      errors: validation.errors.map((error) => {
        return {
          attribute: error.path,
          message: error.message
        }
      })
    });
  });
});

app.patch('/api/users/:id/:stock', function(request, response){
    UserStock.update({
      stock: request.body.stock
    },{where:{
      id: request.params.id,
      stock: request.params.stock
    }}).then((userstock) => {
        response.status(200).json(userstock).send();
    }).catch(()=>response.status(404).json().send());
});


app.delete('/api/users/:id/:stock', function(request, response) {
  UserStock.destroy({where:{
    id: request.params.id,
    stock: request.params.stock
  }}).then(() => {
    response.status(204).send();
  }, () => {
    response.status(404).send();
  });
});


app.listen(8000);
