const express = require("express")
const path = require("path")
const app = express()

const port = process.env.PORT || 2029

if ("production") {
  pp.use("/public", express.static(path.join(__dirname, "public")))

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"))
    //__dirname : It will resolve to your project folder.
  })
} else {
  app.use("/public", express.static(path.join(__dirname, "public")))

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"))
    //__dirname : It will resolve to your project folder.
  })
}

app.listen(port, () => console.log(`listening on port ${port}!`))
