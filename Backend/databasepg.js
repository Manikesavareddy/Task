const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "psql",
  database: "data",
});

client.connect((e) => {
  if (e) {
    console.log(e);
  } else {
    console.log("connected to database");
  }
});

module.exports = client;
