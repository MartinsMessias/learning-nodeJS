var express = require("express");
var path = require("path");

var app = express();

app.use("/static", express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("views engine", "jade");

app.get("/", (req, resp) => {
  resp.render("index", { nome: "TreinaWeb" });
});

app.listen(3000, () => {
  console.log("App rodando na porta 3000");
});
