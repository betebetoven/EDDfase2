
import { Instruccion } from "../abstract/instruccion.js";
import { Environment } from "../symbols/enviroment.js";


export class Bloque extends Instruccion {
    constructor(instrucciones,line, column) {//INSTRUCCIONES ES UN ARRAY
        this.instrucciones = instrucciones;
        super(line,column);
    }

     executar(env) {    

        //analisis semantivo 

        const new_env= new Environment(env);


        // como acceder a otras tablas de simbolos padres
        // while(env!=null){
        //     //busqueda de dla variblea
        //     env = env.anterior
        // }


        for (const elemento  of this.instrucciones) {
            try {
                
                elemento.executar(new_env)
            } catch (error) {
                //console.log(error);
                
            }
        }

        
    }
}