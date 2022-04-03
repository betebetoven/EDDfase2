package com.company;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
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

public class MainFrame extends  JFrame{
    private JButton cargarClientesButton;
    private JPanel MainPanel;
    private JButton cargarCapasButton;
    private JButton cargarImagenesButton;
    private JButton cargarAlbumesButton;
    private JButton logINButton;
    private JTextField textField1;
    private JButton generarButton;
    private JComboBox comboBox1;
    private JTextField textField2;
    private JButton generarButton1;
    private JTextField textField3;
    private JPasswordField passwordField1;
    private JTextField textField4;
    private JButton generarButton2;
    private JLabel usuario;
    private JPanel EspacioImagenes;
    private JLabel lista;
    private JScrollPane Despliegue;
    private JLabel llenado;
    private JScrollPane Espacio;
    //public static
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
    public ArbolB clientes;
    public nodo cliente_actual;
    public static int continterno = 0;
    public listaenlazada clientesemg;

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
    public  static void preordengeneracion(int cont, nodo n,JPanel x)
    {
        if(cont != continterno) {
            if (n == null)
                return;
            //ACA VA EL AGREGADO DE IMAGENES AL JFRAME
            continterno += 1;
            String j = String.valueOf((kpa)n.value);
            /*ImageIcon bruh = new ImageIcon("C:\\Users\\Alberto\\IdeaProjects\\EDDfase2\\"+j);
            JLabel q = new JLabel(bruh);
            x.add(q);*/
            //x.updateUI();
            System.out.println(n.value);


            preordengeneracion(cont, n.izq, x);
            preordengeneracion(cont, n.der, x);
        }


    }
    public  static void inordengeneracion(int cont, nodo n,JPanel x)
    {
        if(cont != continterno) {
            if (n == null)
                return;
            continterno += 1;
            preordengeneracion(cont, n.izq, x);

            System.out.println(n.value);
            //ACA VA EL AGREGADO DE IMAGENES AL JFRAME
            preordengeneracion(cont, n.der, x);
        }


    }
    public  static void postordendengeneracion(int cont, nodo n,JPanel x)
    {

        if(cont != continterno) {
            if (n == null)
                return;
            continterno += 1;
            preordengeneracion(cont, n.izq, x);
            preordengeneracion(cont, n.der, x);
            //ACA VA EL AGREGADO DE IMAGENES AL JFRAME

            System.out.println(n.value);



        }


    }

    public MainFrame()
    {
        //String j = String.valueOf((kpa)n.value);

        /*ImageIcon bruh = new ImageIcon("C:\\Users\\Alberto\\IdeaProjects\\EDDfase2\\capa0.png");

        JLabel q = new JLabel(bruh);
        MainPanel.add(q);*/
        //MainPanel.add(EspacioImagenes);


        //Espacio.updateUI();


        //EspacioImagenes.setVisible(true);
        clientes = new ArbolB();
        clientesemg = new listaenlazada();
        cliente administrador = new cliente("3004548210101","Alberto","zapata");
        nodo primero = new nodo(administrador);
        clientesemg.agrega(primero);



        cliente admin = new cliente("3004548210101","Admin","EDD2022");
        clientes.insertar(admin);

        setContentPane(MainPanel);
        setTitle("Hola como tas");
        setSize(700,700);
        comboBox1.addItem("preorder");
        comboBox1.addItem("inorder");
        comboBox1.addItem("postorder");
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        setVisible(true);


        cargarClientesButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e){
                Gson gsus = new Gson();
                //para el bst de capas de imagenes
                ArrayList<cliente> clientees = new ArrayList<>();
                try {
                    clientees.addAll(Arrays.asList(gsus.fromJson(getContentOfFile(getDir()),cliente[].class)));
                    for (cliente c:
                         clientees) {
                        nodo x = new nodo(c);
                        clientesemg.agrega(x);
                        clientes.insertar(c);

                    }

                } catch (IOException ex) {
                    ex.printStackTrace();
                }


            }
        });
        cargarCapasButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                try {
                    ((cliente)cliente_actual.value).generarcapas();
                } catch (IOException ex) {
                    ex.printStackTrace();
                }
            }
        });
        cargarImagenesButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                try {
                    ((cliente)cliente_actual.value).generaAVL();
                } catch (IOException ex) {
                    ex.printStackTrace();
                }
            }
        });
        cargarAlbumesButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                try {
                    ((cliente)cliente_actual.value).generaLE();
                } catch (IOException ex) {
                    ex.printStackTrace();
                }
            }
        });
        logINButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                ImageIcon bruh = new ImageIcon("capa0.png");
                //JLabel q = new JLabel();
                //llenado.setBounds(0,0,bruh.getIconWidth(),bruh.getIconHeight());
                llenado.setIcon(bruh);
                //JScrollPane Espacio = new JScrollPane();
                Despliegue.setViewportView(llenado);
                //Despliegue.repaint();
                //Espacioso.add(Espacio);

                //Espacio.updateUI();
                //Espacio.setVisible(true);


                String nombre = textField3.getText();
                String contraseña = passwordField1.getText();
                //System.out.println("NOMBRE: "+nombre+" contraseña: "+contraseña);
                nodo ahora = clientesemg.First;
                while (ahora != null)
                {
                    if(((cliente)ahora.value).nombre_cliente.equals(nombre) && ((cliente)ahora.value).password.equals(contraseña)) {
                        cliente_actual = ahora;
                        break;
                    }
                    ahora = ahora.Next;
                }

                usuario.setText(((cliente)cliente_actual.value).nombre_cliente);

            }
        });
        generarButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                //aca va un preorder de el arbol de capas
                String contador = textField1.getText();
                int cont = Integer.parseInt(contador);
                 continterno = 0;
                 if(comboBox1.getSelectedItem().equals("preorder")) {
                     System.out.println("aca comienza PREORDEN");
                     preordengeneracion(cont, ((cliente)cliente_actual.value).arbol_capas.root, EspacioImagenes);
                 }
                 else
                 if(comboBox1.getSelectedItem().equals("inorder")) {
                     System.out.println("aca comienza INORDEN");
                     inordengeneracion(cont, ((cliente)cliente_actual.value).arbol_capas.root, EspacioImagenes);
                 }
                 else
                 if(comboBox1.getSelectedItem().equals("postorder")) {
                     System.out.println("aca comienza POSTORDEN");
                     postordendengeneracion(cont, ((cliente)cliente_actual.value).arbol_capas.root, EspacioImagenes);
                 }




            }
        });
    }

    /*public static void main(String[] args) {


    }*/
}
