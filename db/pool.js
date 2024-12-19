const { Pool } = require("pg");
module.exports = new Pool({
  connectionString: `postgres://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}/${process.env.DATABASE}`,
});
