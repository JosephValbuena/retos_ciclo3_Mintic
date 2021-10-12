package com.sergioa.backendMinticReto3.model;

import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

/**
 *
 * @author josva
 */

@Entity
public class Booking {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID")
    private int id;

    @Column(name = "ID_COSTUME")
    private int id_costume;
    
    @Column(name = "ID_CLIENT")
    private int id_client;
    
    @Column(name="START_DATE")
    private String start_date;
    
    @Column(name="DELIVER_DATE")
    private String deliver_date;
    
    @Column(name="STATUS")
    private String status;

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

    public int getId_client() {
        return id_client;
    }

    public void setId_client(int id_client) {
        this.id_client = id_client;
    }

    public String getStart_date() {
        return start_date;
    }

    public void setStart_date(String start_date) {
        this.start_date = start_date;
    }

    public String getDeliver_date() {
        return deliver_date;
    }

    public void setDeliver_date(String deliver_date) {
        this.deliver_date = deliver_date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    
    
}
