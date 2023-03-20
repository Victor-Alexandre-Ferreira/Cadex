require('dotenv').config();

const express = require('express');
const router = require('./app/routers');

const port = process.env.PORT || 4000;

const app = express();

app.use(router);

app.listen(port, _ => {
    console.log(`http://localhost:${port}`);
});