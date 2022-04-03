package com.company;

public class pixeles {
    public int fila,columna;
    public String color;
    public pixeles(int fila, int columna, String color)
    {
        this.fila = fila;
        this.columna = columna;
        this.color = color;

    }
    @Override
    public String toString() {

        return ("fila: "+fila+"\ncolumna: "+columna+"\ncolor: "+color);

    }

}
