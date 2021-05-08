const { Sequelize, DataTypes } = require("sequelize");
const User = require('./users')
const Category = require('./categories')
const Product = require('./products')
const Cart = require('./carts')
const Review = require('./reviews')
const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: "postgres",
  }
);

const models = {
  User:User(sequelize, DataTypes),
  Category:Category(sequelize, DataTypes),
  Product:Product(sequelize, DataTypes),
  Cart:Cart(sequelize, DataTypes),
  Review:Review(sequelize, DataTypes),
  sequelize:sequelize
}

Object.keys(models).forEach(modelName=> {
  if('associate' in models[modelName]) {
    models[modelName].associate(models)
  }
})
sequelize
  .authenticate()
  .then(() => console.log("Connection established"))
  .catch((e) => console.log("Connection failed ", e));

module.exports = models;
