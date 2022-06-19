const { Environment } = require("./symbols/enviroment.js");
var fs = require("fs");
var gramatica = require("./prueba.js");




var express = require('express');
var morgan = require('morgan');
const { publicDecrypt } = require("crypto");
var app = express();
const path = require('path')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(8080, function () {
  console.log('app listening on port 8080!');
});

//static
app.use(express.static(path.join(__dirname,'public')));

const env_padre = new Environment(null);
app.get('/', function (req, res) {
  fs.readFile("./entrada.txt", (err, data) => {
    if (err) throw err;
   const ast =  gramatica.parse(data.toString());
   for (const elemento  of ast) {
    try {
        
        //preguntar si ese elemtno es de clase metodo o funciones
        
            elemento.executar(env_padre)
        
    } catch (error) {
        //console.log(error);
        
        
    }
}
console.log(env_padre.tablaSimbolos)
    res.json({ msg: "ok" });
  });
  
});