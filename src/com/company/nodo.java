package com.company;

public class nodo {

    public   Object value;
    public int blnc;
    public   nodo izq, der,uniq,Next,Prev,abajo,ladod;
    public String propiedad;
    public int fila, columna;
    public nodo(Object value){
        this.value = value;
        this.izq = null;
        this.der = null;
        this.abajo = null;
        this.ladod = null;
        this.Next = null;
        this.Prev = null;
        this.fila = -1;
        this.columna = -1;
    }
    public void agregabnc(int balance)
    {
        this.blnc = balance;

    }

    public void  agregaderecha(Object valor)
    {
        nodo mnodo = new nodo(valor);
        if(this.der==null)
            this.der=mnodo;
        this.der.Prev = this;

    }
    public void  agregaizquierda(Object valor)
    {
        nodo mnodo = new nodo(valor);
        if(this.izq==null)
            this.izq=mnodo;
        this.izq.Prev = this;

    }
    public void  agragaabajo(nodo mnodo)
    {

        nodo ahora = this;
        while (ahora.abajo != null)
            ahora = ahora.abajo;
        ahora.abajo = mnodo;

    }
    public void  agragaladod(nodo mnodo)
    {

        nodo ahora = this;
        while (ahora.ladod != null)
            ahora = ahora.ladod;
        ahora.ladod = mnodo;

    }



    @Override
    public String toString() {
            if((this.value.getClass() == Integer.class)||(this.value.getClass() == kpa.class)||(this.value.getClass() == imagen.class))
            return ""+this.hashCode()+ "[label=\"" +
                    this.value.getClass().cast(this.value)+
                    "\"]";
            else
                //if(((String)this.value).contains("#"))
                return ""+this.hashCode()+ "[label=\".\",fillcolor =\"" +
                        this.value.getClass().cast(this.value)+
                        "\"]";


    }

}