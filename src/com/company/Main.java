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


public class Main {
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



    public static void main(String[] args) throws IOException {
        MainFrame mainsito = new MainFrame();



    }
}
