const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "db_studien", 
  username: "postgres", 
  host: "localhost", 
  port: "5432", 
  password: "root", 
  dialect: "postgres", 
});

module.exports = db;