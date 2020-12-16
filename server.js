// add required modules
const express = require("express");
const path = require("path");

// Server 3000
const app = express();
const PORT = process.env.PORT || 3000;

// Express usage
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.use(express.static("public"));

//Listen
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});