//import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion.js";
//import { Environment } from "../symbols/enviroment";
//import { Type } from "../symbols/type";

export class Declaracion extends Instruccion {
    constructor( final, tipo, nombre,value,line, column) {
        super(line,column);
        this.nombre = nombre;
        this.tipo = tipo;
        this.value = value;
        this.final = final;// esta madre es boolean
    }
        //aca se transofmran de retorno a simbolo
     executar(env) {
        //codigo analisis semantico
        console.log("Declarando nueva variable: "+ this.nombres);
        //console.log(this);


        const expresion= this.value.executar(env);
        console.log(expresion);
        
        for (const nombre  of this.nombres)
        {
        if(!env.tablaSimbolos.has(nombre))
            env.guardar_variable(nombre,expresion.value,expresion.type)
        console.log(env)
        }
        

        
    }
}