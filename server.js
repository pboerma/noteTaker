//Dependencies

const express = require("express");
const path = require("path");
const fs = require("fs");

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;


//Parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

//Require routes file/ folder required

require('./routes/routes')(app);
  
// Get server to listen

  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
  




