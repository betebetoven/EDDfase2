import { Expression } from "../abstract/express.js";
import { Instruccion } from "../abstract/instruccion.js";
import { Environment } from "../symbols/enviroment.js";
import { Type } from "../symbols/type.js";

export class Asignacion extends Instruccion {
    constructor(nombre ,valor ,line, column ) {
        this.nombre = nombre;
        this.valor = valor;
        super(line,column);
    }

     executar(env) {
         if(this.valor instanceof Expression)
         {
            const expresion= this.valor.executar(env);
            env.actualizar_variable(this.nombre,expresion.value);


         }
         else
         {
             const tmp = env.getTipo_variable(this.nombre);
             const tmp2 = env.getTipo_variable(this.valor);
             if(tmp == tmp2)
             {
                 const tmp3 = env.get_variable(this.valor).value
                 env.actualizar_variable(this.nombre,tmp3);

             }

         }
        
        
    }
    graficar(){
        //singleton, una funcion agregar reporte ast
        //
       
        
    }
}