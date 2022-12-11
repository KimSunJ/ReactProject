"use strict";

// const Sequelize = require("sequelize");
import Sequelize from "sequelize";
import Config from "../config/config.json";

// const Product = require("./product.js'");
import Product from "./product.js";
// const User = require("./user.js'");
import User from "./user.js";
// const Cart = require("./cart.js'");
import Cart from "./cart.js";

const env = process.env.NODE_ENV || "development";
const config = Config[env];
// const config = require(__dirname + "/../config/config.json")[env];
// import config from `${__dirname}/../config/config.json`[env];
const db = { Product, User, Cart }; // 테이블명 넣고

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 여기에 테이블 init 해야함
Product.init(sequelize);
User.init(sequelize);
Cart.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
