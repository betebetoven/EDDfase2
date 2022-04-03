package com.company;

public class bst {
    public nodo root;
    public static String texto;
    public bst()
    {
        this.root = null;
    }
    public void insert(Object valor)
    {
        nodo mnodo = new nodo(valor);
        if (this.root == null)
            this.root = mnodo;
        else
            this._insert(valor, this.root);
    }
    public  static void preordercorreccion(nodo n)
    {
        if (n == null)
            return;
        ((kpa)n.value).m.correcion();
        ((kpa)n.value).printpng();//ACTIVARLO PARA VOLVER A IMPRIMIR LOS PNG ESTO SI SE VUELVE A ACTIVAR

        System.out.println(n.value);

        preordercorreccion(n.izq);
        preordercorreccion(n.der);


    }
    public void correccion()
    {
        preordercorreccion(this.root);
    }
    public void _insert(Object valor, nodo ahora)
    {
        nodo mnodo = new nodo(valor);
        if (mnodo.hashCode()<ahora.hashCode())
            if(ahora.izq == null)
                ahora.izq = mnodo;
            else {
                ahora = ahora.izq;
                this._insert(valor, ahora);
            }
        else
        if(ahora.der == null)
            ahora.der = mnodo;
        else {
            ahora = ahora.der;
            this._insert(valor, ahora);
        }


    }
    public static void imprime_arbol(nodo root)
    {
        texto+=root+"\n";
        if (root.izq!=null) {
            texto+=root.hashCode()+"->"+root.izq.hashCode()+";\n";
            imprime_arbol(root.izq);
        }
        if (root.der!=null) {
            texto+=root.hashCode()+"->"+root.der.hashCode()+";\n";
            imprime_arbol(root.der);
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
                +"        node[color = \"#31CEF0\"]\n";

        imprime_arbol(this.root);

        texto+="\n"
                +"}";
        System.out.println(texto);
        return texto;



    }
}
