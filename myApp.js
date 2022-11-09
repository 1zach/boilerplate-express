require('dotenv').config()
const bodyParser = require('body-parser')

let express = require('express');
let app = express();

let absolutePath = __dirname + "/views/index.html"

console.log("Hello World")

app.get("/", function(req, res) {
    res.sendFile(absolutePath)
});

let staticPath = __dirname + "/public"

app.use("/public", express.static(staticPath))


// app.get("/json", function(req, res) {
//     if (process.env.MESSAGE_STYLE == "uppercase") {
//         res.json({"message": "HELLO JSON"})
//     }
//     else {
//         res.json({"message":"hello json"})
//     }}
//     )
app.use("/json", function(req,res,next) {
    console.log(req.method, req.path, " - ",req.ip)
    next()
})

app.get("/now", function(req, res, next) {
    req.time = new Date().toString()
    next()
}, function(req, res) {
    res.json({"time": req.time})
})

app.get("/:word/echo", function(req, res) {
    const {word} = req.params
        res.json({echo: word})
    })

// app.get("/name", function(req, res) {
//     const {first, last} = req.query
//     res.json({name: first, last})
// }
// )

app.use(
    bodyParser.urlencoded({extended: false})
)
app.use(bodyParser.json())

app.use("/name", function(req,res) {
    const {first, last} = req.body
    res.json({name: first, last})
})

































 module.exports = app;
