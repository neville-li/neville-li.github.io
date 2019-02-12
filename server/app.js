const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const sendMail = require("./utils/sendMail");

const app = express();
// app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.port || 3000;
if(!process.env.NODE_ENV){
    process.env.NODE_ENV = "development";
}

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: path.join(__dirname, "..", "public")});
});

app.post("/email" , (req, res) => {
    
    sendMail(req.body)
    .catch(err => {
        console.log(err);
    });
});

app.listen(port, () => {
    console.log(`
        Sever started on
        \tport: ${port}
        \tmode: ${process.env.NODE_ENV}
    `);
})