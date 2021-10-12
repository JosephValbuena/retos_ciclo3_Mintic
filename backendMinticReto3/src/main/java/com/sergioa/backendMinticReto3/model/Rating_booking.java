package com.sergioa.backendMinticReto3.model;

import javax.persistence.*;

/**
 *
 * @author josva
 */
@Entity
public class Rating_booking {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID")
    private int id;
    
    @Column(name="ID_BOOKING")
    private int id_booking;
    
    @Column(name="RATE")
    private int rate;
    
    @Column(name="MESSAGE")
    private String message;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId_booking() {
        return id_booking;
    }

    public void setId_booking(int id_booking) {
        this.id_booking = id_booking;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
    
    
    
}
