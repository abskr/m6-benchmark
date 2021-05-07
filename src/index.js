const express = require("express");

const productsRouter = require("./services/products");
const cartsRouter = require("./services/cart");
const categoriesRouter = require("./services/categories");
const db = require("./db");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json());
server.use("/products", productsRouter);
server.use("/cart", cartsRouter);
server.use("/categories", categoriesRouter);
db.sequelize.sync({ force: true }).then((result) => {
 return db.User.findByPk(1)
  
}).then(async user=> {
  if(!user) {
    const newUser = await db.User.create({
      firstName: "Andi",
      lastName: "Bskr",
      email: "bskr26@gmx.de",
    })
  }
}).then(()=>{
  server.listen(process.env.PORT || 5001, () => {
    console.log("server is running on port ", process.env.PORT || 5001);
  });
})

