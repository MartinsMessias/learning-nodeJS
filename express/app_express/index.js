var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

var app = express();

app.use("/static", express.static("public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app
  .route("/")
  .get((req, res) => {
    listarCursos(res);
  })
  .post((req, res) => {
    var curso = { nome: req.body.nome, categoria: req.body.categoria };

    inserirCurso(curso, () => {
      listarCursos(res);
    });
  });

app.listen(3000, () => {
  console.log("App rodando na porta 3000");
});

function listarCursos(resp) {
  MongoClient.connect(
    "mongodb://localhost:27017",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, database) => {
      const myDB = database.db("treinaweb2");
      myDB
        .collection("cursos")
        .find()
        .sort({ none: 1 })
        .toArray((err, result) => {
          console.log(333, result);
          resp.render("index", { data: result });
        });
    }
  );
}

function inserirCurso(obj, callback) {
  MongoClient.connect(
    "mongodb://localhost:27017",
    { useNewUrlParser: true },
    (err, database) => {
      const db = database.db("treinaweb2");
      db.collection("cursos").insertOne(obj, function (err, result) {
        callback();
      });
    }
  );
}
