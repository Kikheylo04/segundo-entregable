const { port } = require("pg/lib/defaults");
const { Sequelize } = require("sequelize");
const db = new Sequelize({
  database: "sequelize",
  port: 5432,
  host: "localhost",
  username: "sebas",
  password: "secretsecret",
  dialect: "postgres",
});

module.exports = db;
