package com.sergioa.backendMinticReto3.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

/**
 *
 * @author josva
 */

@Entity
public class Costume {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID")
    private Integer id;
    
    @Column(name="BRAND", nullable = false, length = 45)
    private String brand;
    
    @Column(name= "YEAR", nullable = false)
    private int year;
    
    @Column(name="CATEGORY_ID", nullable = false)
    private int category_id;
    
    @Column(name="NAME", nullable = false, length = 45)
    private String name;
    
    @Column(name="DESCRIPTION", nullable = false, columnDefinition = "Text")
    private String description;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getCategory_id() {
        return category_id;
    }

    public void setCategory_id(int category_id) {
        this.category_id = category_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    
    
    
}
