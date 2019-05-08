const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const exphbs = require("express-handlebars");
const routes = require("./controllers/routes.js");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on:" + PORT);
});
