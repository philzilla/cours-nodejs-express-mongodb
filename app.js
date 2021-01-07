const express = require('express');
const app = express();
const mongoose = require("mongoose");
const port = 3000

// BodyParser --------------------------------------------------------------------------------------------------------------/
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


// Connection à MongoDB avec Mongoose --------------------------------------------------------------------------------------/
mongoose.connect(
  "mongodb://localhost:27017/blog",
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
  }
)


// Schema "User" pour créer la collection dans la base de donnnée ----------------------------------------------------------/
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const User = mongoose.model("user", userSchema)


// Schema "Article" pour créer la collection dans la base de donnnée -------------------------------------------------------/
const articleSchema = new mongoose.Schema({
  title: String,
  content: String
});
const Article = mongoose.model("article", articleSchema)


// Controller --------------------------------------------------------------------------------------------------------------/

// Méthode GET ---------------------/
// Page accueil ---/
app.get('/', function (req, res) {// Function CALLBACK
      res.send('Salut tout le monde !')
  }
)


// Méthode POST --------------------/

// Méthode PUT ---------------------/

// Méthode DELETE ------------------/



// Erreur 404 ------------------/
app.get('*', function (req, res) { // Function CALLBACK
    res.send('Page introuvable')
  }
)

// Port --------------------------------------------------------------------------------------------------------------------/
app.listen(port, function () {
  console.log(
    `Ecoute le port ${port}, lancé à : ${new Date().toLocaleString()}`
  );
});
