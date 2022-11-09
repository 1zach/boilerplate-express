let express = require('express');
let app = express();

let absolutePath = __dirname + "/views/index.html"

console.log("Hello World")

app.get("/", function(req, res) {
    res.sendFile(absolutePath)
});

let staticPath = __dirname + "/public"

app.use("/public", express.static(staticPath))


app.get("/json", function(req, res) {
    res.json({"message": "hello json"})}
    )
































 module.exports = app;
