const knex = require("knex");

const knexConfig = {
  client: "sqlite",
  connection: {
    filename: "./data/lambda.sqlite3"
  },
  useNullAsDefault: true
};
const db = knex(knexConfig);

module.exports = db;
