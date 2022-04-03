package com.company;
public class NodoB {

    //Valores
    int id;
    //Apuntadores
    NodoB siguiente;
    NodoB anterior;
    RamaB derecha;
    RamaB izquierda;
    public Object value;

    public NodoB(Object value) {
        this.value = value;
        this.id = this.hashCode();
        this.anterior = null;
        this.siguiente = null;
        this.derecha = null;
        this.izquierda = null;
    }

}