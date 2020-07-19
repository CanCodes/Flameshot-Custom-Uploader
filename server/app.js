const express = require("express")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")
const fs = require("fs")

let app = express();

const KEY = "GENERATED_KEY_HERE";

//middlewares and settings
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", (req,res,next) => {
    if (!req.files.file) return res.status(400).json({success:false})
    if (req.query.key != KEY) return res.status(401).json({success:false})
    let fileName = `${Math.floor(Math.random() * 4587363)}.png`
    while(fs.existsSync('./images/'+fileName)) {
        fileName = `${Math.floor(Math.random() * 4587363)}.png`
    }
    req.files.file.mv(`./images/${fileName}`, (err) => {
        if (err) {
             return res.status(500).json({success:false});
        } else {
            return res.status(200).json({success: true, url: fileName})
        }

    })
})

app.get("/:filename", (req,res,next) => {
    if(fs.existsSync(`./images/${req.params.filename}`)) return res.sendFile(__dirname + `./images/${req.params.filename}`)
    next();
})

//404
app.use((req,res,next) => {
    res.status(404)
})

app.listen(5000)
