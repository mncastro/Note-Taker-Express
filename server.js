// Setting required dependencies

const express = require("express");
const path = require("path");

// Confuguring Express library and creating application variable (server node)

const app = express();

// Set port for development
const PORT = process.env.PORT || 3000;

// Sets Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));

// Connecting API and HTML routes to application

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Connects application to node server and console logs result

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});