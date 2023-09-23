const express = require("express");

const expressConfig = require("./config/expressConfig");
const handlebarsConfig = require("./config/handlebarsConfig");
const routes = require('./routes');

const app = express();

const PORT = 5000;

// Express config
expressConfig(app);

// Handlebars config
handlebarsConfig(app);

// Routes
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
