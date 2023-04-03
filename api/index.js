const server = require("./src/app");
const { conn } = require("./src/db");
require("dotenv").config();
// const { PORT } = process.env;
const  PORT  = 3001

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  });
});
