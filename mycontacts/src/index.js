const express = require('express');
const routes = require('./app/routes.js');

const app = express();

app.listen(3000, () => console.log('Server running at http://localhost:3000/'));

app.use(routes);
