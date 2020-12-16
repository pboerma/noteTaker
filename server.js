// Require Dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;


//Parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public/"));

//Require routes file/ folder required

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Get server to listen

  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
  




