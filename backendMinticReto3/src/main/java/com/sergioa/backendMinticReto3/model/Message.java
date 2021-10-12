package com.sergioa.backendMinticReto3.model;

import javax.persistence.*;

/**
 *
 * @author josva
 */

@Entity
public class Message {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID")
    private int id;
    
    @Column(name="ID_COSTUME")
    private int id_costume;
    
    @Column(name="ID_CLIENT")
    private int id_client;
    
    @Column(name="MESSAGETEXT", nullable = false, length = 250)
    private String messagetext;

    public int getId_client() {
        return id_client;
    }

    public void setId_client(int id_client) {
        this.id_client = id_client;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId_costume() {
        return id_costume;
    }

    public void setId_costume(int id_costume) {
        this.id_costume = id_costume;
    }

    public String getMessagetext() {
        return messagetext;
    }

    public void setMessagetext(String messagetext) {
        this.messagetext = messagetext;
    }
    
    
}
