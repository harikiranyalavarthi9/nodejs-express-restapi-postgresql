const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server listening on the port ${port}`);
})