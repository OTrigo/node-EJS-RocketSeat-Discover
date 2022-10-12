const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", function(req, res) {
  const items = [
    {
      title:"D",
      message:"esenvolver aplicações/serviços de forma fácil"
    },
    {
      title:"E",
      message:"JS usa Js para renderizar HTML"
    },
    {
      title:"M",
      message:"uito fácil de usar"
    },
    {
      title:"A",
      message:" mais prática forma de criar serviços"
    },
    {
      title:"I",
      message:"nfinidade de utilidades"
    },
    {
      title:"S",
      message:"intaxe simples"
    }
  ]

  const subtitle = "Uma linguagem de modelagem para a criação de páginas HTML utilizando Js"

  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle,
  })
})

app.get("/sobre", function(req, res) {
  res.render("pages/about")
})

app.listen(8080);
console.log('Rodando')