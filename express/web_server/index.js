var express = require("express");

var app = express();

app.use(express.static("public"));

app.get("/:id?", (req, res) => {
  res.send("Olá mundo! - " + req.params.id);
});

app.listen(3000, () => {
  console.log("App rodando na porta 3000");
});
