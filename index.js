const express = require("express");
const app = express()
const port = process.env.PORT || 2000

app.use(express.json())
app.use("/", require("./server/routes"))
app.use(express.static("./public"));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set("views", "./server/templates");

app.listen(port);