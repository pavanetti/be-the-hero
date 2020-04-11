const knex = require("knex");
const configurations = require("../knexfile");

const env = process.env.NODE_ENV || "development";
const config =
  env === "test" ? configurations.test : configurations.development;
module.exports = knex(config);
