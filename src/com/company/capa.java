package com.company;

import java.util.ArrayList;

public class capa {
    public int id_capa;
    public pixeles[] pixeles;
    public capa (int id_capa, pixeles[] pixeles)
    {
        this.id_capa = id_capa;
        this.pixeles = pixeles;
    }
    @Override
    public String toString() {
        String texto = "capa: "+this.id_capa+"\npixeles: "+this.pixeles.length;
        //for (pixeles c: this.pixeles)
            //texto += "\n"+c;

        texto += "\n";

       return (texto);
    }



}
