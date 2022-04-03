package com.company;
//PARA ITERAR JSON


public class album {
    public String nombre_album;
    public int[] imgs;
    public album(String nombre_album, int[] imgs)
    {
        this.nombre_album = nombre_album;
        this.imgs = imgs;

    }

    @Override
    public String toString() {
        return
                "nombre_album " + nombre_album;
    }
}
