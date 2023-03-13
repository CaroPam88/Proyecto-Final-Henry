const server = require('./src/app');
const { conn } = require('db');
require('dotenv').config();
const { PORT } = process.env;

conn.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
        console.log(`listening on ${PORT}`);
    });
});