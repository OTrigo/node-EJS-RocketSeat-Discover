const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", function(req, res) {
  const items = [
    {
      title:"D",
      message:"Desenvolver aplicações/serviços de forma fácil"
    },
    {
      title:"E",
      message:"EJS usa Js para renderizar HTML"
    },
    {
      title:"M",
      message:"Muito fácil de usar"
    },
    {
      title:"A",
      message:"A mais prática forma de criar serviços"
    },
    {
      title:"I",
      message:"Infinidade de utilidades"
    },
    {
      title:"S",
      message:"Sintaxe simples"
    }
  ]

  res.render("pages/index", {
    qualitys: items,
  })
})

app.get("/sobre", function(req, res) {
  res.render("pages/about")
})

app.listen(8080);
console.log('Rodando')