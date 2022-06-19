import { Environment } from "../symbols/enviroment.js";

export  class Instruccion {
    
    constructor( line,column) {
        this.line= line;
        this.column= column+1 ;
    }
    
     executar(env)
     {Object}
    //public abstract graficaraAST(): any
}