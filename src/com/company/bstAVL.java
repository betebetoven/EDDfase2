package com.company;
//_INSERT CAMBIAR EL VALOR DE COMPARACION
public class bstAVL {
    public nodo root;
    public nodo va;
    public int result = 0;
    public static String texto;
    public static nodo desbalanceado;
    public listaenlazada desbalanceados = new listaenlazada();

    public bstAVL()
    {
        this.root = null;
    }
    public int contizq=0, contder = 0;
    public void insert(Object valor)
    {
        nodo mnodo = new nodo(valor);
        if (this.root == null)
            this.root = mnodo;
        else
            this._insert(valor, this.root);
    }
    public void verificarizq(nodo root, nodo referente)
    {
        if (root.izq!=null) {

            contizq +=1;
            verificarizq(root.izq, referente);
        }
        else
        if (root.der!=null && root != referente) {
            contizq+=1;
            verificarizq(root.der, referente);
        }

    }
    public void verificarder(nodo root, nodo referente)
    {
        if (root.der!=null) {

            contder  +=1;
            verificarder(root.der, referente);
        }
        else
        if (root.izq!=null && root != referente) {
            contder+=1;
            verificarder(root.izq, referente);
        }

    }
    public void preordercorreccionbalanceo(nodo n)
    {
        if (n == null)
            return;
        System.out.println(n.value);
        boolean s = this.verificaravl(n);
        System.out.println(s);
        if (!s) {
            //desbalanceado = n;
            //va = desbalanceado;
            //va = n;
            n.agregabnc(result);
            this.desbalanceados.agrega(n);
        }
        preordercorreccionbalanceo(n.izq);
        preordercorreccionbalanceo(n.der);


    }
    public void correccionbalanceo()
    {
        preordercorreccionbalanceo(this.root);
    }
    public boolean verificaravl(nodo root)
    {
        contizq = 0;
        contder = 0;
        verificarizq(root, root);
        verificarder(root, root);
        result = contder - contizq;
        //System.out.println("contizq: "+contizq+"  contder: "+contder);
        //System.out.println("el balance es: "+result);
        if (result == 0 || result == 1 || result == -1)
            return true;
        else  return false;
    }

    public void _insert(Object valor, nodo ahora)
    {
        nodo mnodo = new nodo(valor);
        if (((imagen)mnodo.value).id<((imagen)ahora.value).id)//ACA CAMBIAR EL VALOR DE COMPARACION
            if(ahora.izq == null) {
                ahora.izq = mnodo;
                ahora.izq.Prev = ahora;
            }
            else {
                ahora = ahora.izq;
                this._insert(valor, ahora);
            }
        else
        if(ahora.der == null) {
            ahora.der = mnodo;
            ahora.der.Prev = ahora;
        }
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
    public void balanceoavl()
    {
        System.out.println("EL PROBLEMA ES DE BALANCEA");
        nodo ahora = null;
        nodo tmp = this.desbalanceados.Last;
        if(tmp.blnc < 0) ahora = tmp.izq;
        else if(tmp.blnc > 0) ahora = tmp.der;
        else  ahora = null;
        ahora.Prev = null;
        if(tmp == this.root)
        {
            this.root = ahora;
            System.out.println("SI ENTRO HASTA ACA EN EL THIS.ROOT = AHORA"+this.root);
        }
        else
        {
            if(tmp.Prev.der != null && tmp.Prev.der == tmp) {
                tmp.Prev.der = ahora;
                ahora.Prev = tmp.Prev;
            }
            else if(tmp.Prev.izq != null && tmp.Prev.izq == tmp) {
                tmp.Prev.izq = ahora;
                ahora.Prev = tmp.Prev;
            }

        }
        tmp.Prev = null;
        if(tmp.blnc <0)tmp.izq = null;
        else if (tmp.blnc >0)tmp.der = null;
        this.insercionpreorden(tmp);
        this.desbalanceados.First = null;
        this.desbalanceados.tamaño = 0;
        this.desbalanceados.Last = null;
        tmp = null;
        ahora = null;
        desbalanceado = null;
        this.correccionbalanceo();
        if(this.desbalanceados.tamaño > 0)
            this.balanceoavl();
        this.desbalanceados.First = null;
        this.desbalanceados.tamaño = 0;
        this.desbalanceados.Last = null;





    }
    public void insercionpreorden(nodo n)
    {
        System.out.println("Es problema del insercion preorden");
        if (n == null)
            return;
        //System.out.println(n.value);
        n.Prev = null;
        this.insert(n.value.getClass().cast(n.value));
        System.out.println("INSERTO EL "+n.value.getClass().cast(n.value)+" EN "+this.desbalanceados.Last);
        if(n.der != null)
            System.out.println("der: "+n.value.getClass().cast(n.der.value));
        if(n.izq != null)
            System.out.println("izq: "+n.value.getClass().cast(n.izq.value));

        insercionpreorden(n.izq);
        insercionpreorden(n.der);
        //n.izq = null;
        //n.der = null;

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
        //System.out.println(texto);
        return texto;



    }
}
