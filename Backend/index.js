const exp = require("express");
const app = exp();
const cors = require("cors");
const client = require("./databasepg");

app.use(cors());

app.listen(3000, () => console.log("server started"));

async function connectAndQuery() {
  try {
    const res = await client.query("SELECT * FROM users");
    return res.rows;
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
}

app.get("/api/v1/data", async (req, res) => {
  let data;
  try {
    data = await connectAndQuery();
  } catch (e) {
    console.log(e);
  }

  if (!data) {
    return res.status(404).json({ message: " No data found" });
  }

  return res.status(200).json({ data });
});
