package com.company;

public class imagen {
    public bst binario;
    public int id;
    public imagen(int id, bst binario)
    {
        this.id = id;
        this.binario = binario;
    }

    @Override
    public String toString() {
        return "id  " + id;
    }
}
