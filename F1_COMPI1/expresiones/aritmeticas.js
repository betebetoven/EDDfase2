import { Expression } from "../abstract/express.js"
import { Retorno } from "../abstract/Retorno.js"
import { Environment } from "../symbols/enviroment.js"
import { Type } from "../symbols/type.js"
import { AritmeticOption } from "./aritmeticOption.js"

export class Arithmetic extends Expression {

    constructor( left, right, type,line,column) {
        this.left = left;
        this.right = right;
        this.type = type;
        super(line, column)
    }
     // el env queda para los accesos a las variables se use o no pero si lo pide chingadamadre
     executar(env){

        var result = new Retorno(null,Type.error)
        

        
        const nodoDer = null;
       
        const nodoIzq = this.left.executar(env)
        if(this.right != null)
        {
         nodoDer = this.right.executar(env)
        
            if(nodoDer.type == Type.VARIABLE)
            {
                nodoDer.type = env.getTipo_variable(nodoDer.value)
                nodoDer.value = env.get_variable(nodoDer.value).value
            }
            if(nodoIzq.type == Type.VARIABLE)
            {
                nodoIzq.type = env.getTipo_variable(nodoIzq.value)
                nodoIzq.value = env.get_variable(nodoIzq.value).value
            }

        if (this.type == AritmeticOption.MAS) {

   
            
            if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: (nodoIzq.value + nodoDer.value), 
                    type: Type.NUMBER 
                }
            }else if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.STRING
                ||nodoDer.type == Type.STRING && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: (String(nodoIzq.value) + String(nodoDer.value)), 
                    type: Type.STRING 
                }
            }else if (nodoIzq.type == Type.STRING || nodoDer.type == Type.STRING ) {
                result = { 
                    value: (String(nodoIzq.value) + String(nodoDer.value)), 
                    type: Type.STRING 
                }
            }/*else if (nodoIzq.type == Type.BOOLEAN && nodoDer.type == Type.NUMBER ) {
                const val:number= nodoIzq.value? 1:0
                result = { 
                    value: ( val+nodoDer.value), 
                    type: Type.NUMBER 
                }
            }
            else if (nodoDer.type == Type.BOOLEAN && nodoIzq.type == Type.NUMBER ) {
                const val:number= nodoDer.value? 1:0
                result = { 
                    value: ( val+nodoIzq.value), 
                    type: Type.NUMBER 
                }
            }
            else if (nodoIzq.type == Type.BOOLEAN || nodoDer.type == Type.BOOLEAN ) {
                const val1:number= nodoIzq.value? 1:0
                const val2:number= nodoDer.value? 1:0
                result = { 
                    value: ( val1+val2), 
                    type: Type.NUMBER 
                }
            }*/
            
            //demas validadionces para la operaciones aritmeticas
            
        }else if (this.type == AritmeticOption.MENOS) {

   
            if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: (nodoIzq.value - nodoDer.value), 
                    type: Type.NUMBER 
                }
            }
            //en la resta unicamente quiero con numeros AGREGAR LAS TIPO VARIABLES
            
        }else if(this.type == AritmeticOption.MULTIPLICACION)
        {
            if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: (nodoIzq.value * nodoDer.value), 
                    type: Type.NUMBER 
                }
            }


        }
        else if(this.type == AritmeticOption.DIVISION)
        {
            if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: (nodoIzq.value / nodoDer.value), 
                    type: Type.NUMBER 
                }
            }


        }
        else if(this.type == AritmeticOption.MODULO)
        {
            if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: (nodoIzq.value % nodoDer.value), 
                    type: Type.NUMBER 
                }
            }


        }
        else if(this.type == AritmeticOption.POTENCIA)
        {
            if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: (nodoIzq.value ** nodoDer.value), 
                    type: Type.NUMBER 
                }
            }


        }
    }
        else if(this.type == AritmeticOption.SOBRESUMA)
        {
            if (nodoIzq.type == Type.VARIABLE) {
                if(env.getTipo_variable(nodoIzq.value)== Type.NUMBER)
                {//CAMBIO DE LITERAL DE NOBRE DE VARIABE A SU VALOR
                    var tmp = nodoIzq.value
                nodoIzq.type = env.getTipo_variable(nodoIzq.value)
                nodoIzq.value = env.get_variable(nodoIzq.value).value
                nodoIzq.value = nodoIzq.value + 1
                env.actualizar_variable(tmp, nodoIzq.value)


                result = { 
                    value: nodoIzq.value, 
                    type: Type.NUMBER 
                }
            }
            }


        }
        else if(this.type == AritmeticOption.SOBRERESTA)
        {
            if (nodoIzq.type == Type.VARIABLE) {
                if(env.getTipo_variable(nodoIzq.value)== Type.NUMBER)
                {//CAMBIO DE LITERAL DE NOBRE DE VARIABE A SU VALOR
                    var tmp = nodoIzq.value
                nodoIzq.type = env.getTipo_variable(nodoIzq.value)
                nodoIzq.value = env.get_variable(nodoIzq.value).value
                nodoIzq.value = nodoIzq.value - 1
                env.actualizar_variable(tmp, nodoIzq.value)


                result = { 
                    value: nodoIzq.value, 
                    type: Type.NUMBER 
                }
            }
            }


        }






        return result
    }


}
