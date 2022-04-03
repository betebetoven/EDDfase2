package com.company;
import com.google.gson.*;

import java.io.*;
import java.security.PublicKey;
import java.util.Set;
import java.util.HashSet;
import java.io.FileWriter;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.security.Principal;
import java.util.Set;
import java.util.HashSet;

import java.io.FileReader;
import java.security.Key;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.Scanner;
import javax.print.DocFlavor;
import javax.swing.*;
import java.util.Random;
import javax.swing.plaf.synth.SynthTextAreaUI;


public class cliente {
    public bst arbol_capas;
    public listaenlazada le_albumes;
    public bstAVL avl_imagenes;

    public String dpi, nombre_cliente,password;
    public static ArrayList<capa> capas = new ArrayList<>();
    public static ArrayList<cliente> clientesobj  = new ArrayList<>();
    public static  ArrayList<album> albumesobj = new ArrayList<>();
    public static ArrayList<fot> fotosobj = new ArrayList<>();
    public static String dir;
    public static String getContentOfFile(String pathname) {
        File archivo = null;
        FileReader fr = null;
        BufferedReader br = null;

        try {
            // Apertura del fichero y creacion de BufferedReader para poder
            // hacer una lectura comoda (disponer del metodo readLine()).
            //para el commit final
            archivo = new File(pathname);
            fr = new FileReader(archivo);
            br = new BufferedReader(fr);
            // Lectura del fichero
            String content = "";
            String linea;
            while ((linea = br.readLine()) != null) {
                content += linea + "\n";
            }
            return content;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // En el finally cerramos el fichero, para asegurarnos
            //otro cambio solo para hacerlo bien
            // que se cierra tanto si todo va bien como si salta
            // una excepcion.
            try {
                if (null != fr) {
                    fr.close();
                }
            } catch (Exception e2) {
                e2.printStackTrace();
            }
        }
        return "";
    }

    public static String getDir()throws IOException
    {
        JFileChooser fileChooser = new JFileChooser();
        fileChooser.setCurrentDirectory(new File(System.getProperty("user.home")));
        int result = fileChooser.showOpenDialog(fileChooser.getParent());
        if (result == JFileChooser.APPROVE_OPTION) {
            File selectedFile = fileChooser.getSelectedFile();
            dir = selectedFile.getAbsolutePath();
            System.out.println("Selected file: " + selectedFile.getAbsolutePath());

        }
        return dir;

    }
    public cliente(String dpi, String nombre_cliente, String password)
    {
        this.dpi = dpi;
        this.nombre_cliente = nombre_cliente;
        this.password = password;

    }
    public void generarcapas ()throws IOException
    {
        Gson gsus = new Gson();
        //para el bst de capas de imagenes
        capas.addAll(Arrays.asList(gsus.fromJson(getContentOfFile(getDir()),capa[].class)));
        System.out.println(capas);
        bst binario = new bst();
        kpa kp = null;
        //Iteracion del objeto para creacion de matriz en cada objeto kpa e insesrcion en el abol binario
        for (capa c: capas ) {
            matriz tmp = new matriz();
            for (pixeles k: c.pixeles )
                tmp.insertar(k.color,k.fila,k.columna);

            System.out.println("tamaño de le: "+tmp.le.tamaño);
            kp = new kpa(c.id_capa, tmp);
            kp.m.getdimensiones();
            binario.insert(kp);

        }
        binario.correccion();//CORRECION DE LAS MATRICES EN EL ARBOL BINARIO(IMPRIME ADENTRO DE LA FUNCION CORRECCION EN MATRIZ)
        //System.out.println(binario);//SOLO SACA EL DOT PARA EL GRAPHVIZ DE CADA ARCHIVO*/
        this.arbol_capas = binario;


    }
    public void  generaAVL() throws  IOException
    {
        Gson gsus = new Gson();
        //PARA IMAGENES(ARBOL AVL)
        fotosobj.addAll(Arrays.asList(gsus.fromJson(getContentOfFile(getDir()),fot[].class)));
        bstAVL imagenesAVL = new bstAVL();
        for (fot f : fotosobj) {
            bst pasos_binario = new bst();
            for (int n: f.capas)
                pasos_binario.insert(n);

            imagen img = new imagen(f.id,pasos_binario);
            imagenesAVL.insert(img);
            imagenesAVL.correccionbalanceo();
            if(imagenesAVL.desbalanceados.tamaño >0)
                imagenesAVL.balanceoavl();



        }
        this.avl_imagenes = imagenesAVL;
        //System.out.println(imagenesAVL);

    }
    public void generaLE() throws  IOException
    {
        Gson gsus = new Gson();
        albumesobj.addAll(Arrays.asList(gsus.fromJson(getContentOfFile(getDir()),album[].class)));
        listaenlazada albumes = new listaenlazada();
        for (album c : albumesobj ) {
            listaenlazada imagenes = new listaenlazada();
            for (int k: c.imgs) {
                nodo tp = new nodo(k);
                imagenes.agrega(tp);

            }
            albumLE albumito = new albumLE(c.nombre_album, imagenes);
            nodo temporal = new nodo(albumito);
            albumes.agrega(temporal);

        }
        this.le_albumes = albumes;

    }





}
