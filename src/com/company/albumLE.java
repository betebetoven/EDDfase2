package com.company;

public class albumLE {
    public String nombre;
    public listaenlazada fotos;
    public albumLE(String nombre, listaenlazada fotos)
    {
        this.nombre = nombre;
        this.fotos = fotos;

    }

    @Override
    public String toString() {
        return  "nombre " + nombre ;
    }
}
