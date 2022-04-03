package com.company;


public class matriz {
    public nodo raiz;
    public int tfila,tcolumna;
    public static String texto = "";
    public  listaenlazada le = new listaenlazada();
    public static int maxf=0;
    public  static  int  maxc=0;

    public  matriz()
    {
        this.raiz = new nodo(-1);
        this.tcolumna = -1;
        this.tfila = -1;


    }
    public void insertar(Object valor, int f, int c)
    {

        if (maxf < f)
            maxf = f;
        if (maxc<c)
            maxc = c;


        nodo mnodo = new nodo(valor);
        le.agrega(mnodo);
        if (this.tcolumna < c)
        {
            for (int i = tcolumna; i<c; i++)
            {
                nodo temp = new nodo(i+1);
                this.agregalado(temp);
                le.agrega(temp);

            }
            this.tcolumna = c;
        }
        if (this.tfila < f)
        {
            for (int i = tfila; i<f; i++)
            {
                nodo temp = new nodo(i+1);
                this.agregaabajo(temp);
                le.agrega(temp);

            }
            this.tfila = f;
        }
        nodo  ahora = this.raiz;
        //colocacion en fila
        while (((int)ahora.value) != c)
            ahora = ahora.ladod;
        ahora.agragaabajo(mnodo);
        //colocacion en columna
        ahora = this.raiz;
        while (((int)ahora.value) != f)
            ahora = ahora.abajo;
        ahora.agragaladod(mnodo);
    }
    public void agregalado(nodo mnodo)
    {
            nodo ahora = this.raiz;
            while (ahora.ladod != null)
                ahora = ahora.ladod;
            ahora.ladod = mnodo;
            ahora.ladod.Prev = ahora;
    }
    public void agregaabajo(nodo mnodo)
    {
        nodo ahora = this.raiz;
        while (ahora.abajo != null)
            ahora = ahora.abajo;
        ahora.abajo = mnodo;
        ahora.abajo.Prev = ahora;
    }
    public void getdimensiones()
    {
        System.out.println("cmax: "+maxc+" fmax: "+maxf);
    }
    public void correcion()
    {
        if (this.tcolumna < maxc)
        {
            for (int i = tcolumna; i<maxc; i++)
            {
                nodo temp = new nodo(i+1);
                this.agregalado(temp);
                le.agrega(temp);

            }
            this.tcolumna = maxc;
        }
        if (this.tfila < maxf)
        {
            for (int i = tfila; i<maxf; i++)
            {
                nodo temp = new nodo(i+1);
                this.agregaabajo(temp);
                le.agrega(temp);

            }
            this.tfila = maxf;
        }

    }


    @Override
    public String toString() {
        texto = "digraph G\n"
                +"{label=\"expresion regular\"\n"
                +"        node[shape = circle]\n"
                +"        node[style = filled]\n"
                +"        node[fillcolor = \"#EEEEE\"]\n"
                +"        node[color = \"#EEEEE\"]\n"
                +"        node[color = \"#31CEF0\"]\n"
                +"        edge [style=invis]\n";
        texto+= "\n"+this.raiz.hashCode()+ "[label=\"" + "-1"+"\"]";
        texto += le;
        //conexion columnas
        nodo temp = this.raiz;
        while (temp != null) {
            if(temp.ladod != null)
            texto += "\n" + temp.hashCode() + "->" + temp.ladod.hashCode() + "[dir = both];";
            if (temp.abajo != null) {
                nodo temp2 = temp;
                while (temp2.abajo != null) {
                    texto += "\n" + temp2.hashCode() + "->" + temp2.abajo.hashCode() + "[dir = both];";
                    temp2 = temp2.abajo;
                }

            }
            temp = temp.ladod;
        }
        //conexion filas
        temp = this.raiz;
        while (temp != null) {
            if(temp.abajo != null)
            texto += "\n" + temp.hashCode() + "->" + temp.abajo.hashCode() + "[dir = both];";
            if (temp.ladod != null) {
                nodo temp2 = temp;
                while (temp2.ladod != null) {
                    texto += "\n" + temp2.hashCode() + "->" + temp2.ladod.hashCode() + "[constraint=false, dir=both];";
                    temp2 = temp2.ladod;
                }

            }
            temp = temp.abajo;
        }

        //conexion de rank4
        nodo fin = this.raiz;
        while (fin != null)
        {

            if (fin.ladod != null)
            {
                texto += "\n{rank=same; ";
                nodo fin2 = fin;
                while (fin2 != null)
                {
                    texto += fin2.hashCode()+";";
                    fin2 = fin2.ladod;
                }
                texto+="}";
            }
            else texto += "\n{rank=same; "+fin.hashCode()+";}";

            fin = fin.abajo;
        }

        texto+="\n"
                +"}";
        //System.out.println(texto);
        //le.First = null;
        //le.tamaño = 0;
        return texto;
    }
}
