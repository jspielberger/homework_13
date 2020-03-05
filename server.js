
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

var exphbs = require("express-handlebars");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);

});