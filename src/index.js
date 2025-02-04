const express = require("express");
const { google } = require("googleapis");
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static("public"));
app.use(cookieParser());

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));


let main = require("./routers/main");

app.use("/", main);

app.listen(port, () => {
  console.log("Servidor funcionando en http://localhost:" + port);
});
