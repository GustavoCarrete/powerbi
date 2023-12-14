const express = require("express");
const bodyParser = require('body-parser');

const cors = require("cors")


const app = express();

const routes = require('./routes/miranda.routes')

app.use(bodyParser.json())
app.use(cors())
app.use(routes);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



module.exports = app;