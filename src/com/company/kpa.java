package com.company;


import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public class kpa {
    public int id;
    public  matriz m;
    public kpa(int id, matriz m)
    {
        this.id = id;
        this.m = m;

    }

    public static void   creaFile(String ruta, String contenido)
    {
        FileWriter fw =null;
        PrintWriter pw = null;
        try {
            fw = new FileWriter(ruta);
            pw = new PrintWriter(fw);
            pw.write(contenido);
            pw.close();
            fw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        finally {
            if (pw != null)
                pw.close();
        }

    }
    public  void printpng()
    {
        try {


            creaFile("file"+this.id+ ".dot",String.valueOf(this.m));
            ProcessBuilder pb;
            //"dot","-Tpng","-o","list.png","file.dot"
            pb = new ProcessBuilder( "dot", "-Tpng", "-o capa"+this.id+".png", "file"+this.id+ ".dot");
            pb.redirectErrorStream(true);
            pb.start();
            System.out.println("si llego a capa"+this.id);

        }
        catch (Exception e)
        {
            e.printStackTrace();
        }

    }

    @Override
    public String toString() {
        return "capa"+this.id+".png" ;
    }
}

