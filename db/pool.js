const { Pool } = require("pg");
module.exports = new Pool({
  connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.DB_PORT}/${process.env.DATABASE}`,
});
