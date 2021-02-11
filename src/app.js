const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const router = require("./routes/router");

app.use("/", router);

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views")); 

app.use(express.static(path.join(__dirname, '../public'))); 

app.use(methodOverride("_method")); 

app.listen(3000, function(){
    console.log("El servidor está corriendo en el puerto 3000")
}); 