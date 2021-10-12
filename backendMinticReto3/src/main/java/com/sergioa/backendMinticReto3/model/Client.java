package com.sergioa.backendMinticReto3.model;

import javax.persistence.*;

/**
 *
 * @author josva
 */

@Entity
public class Client {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID")
    private int id;
    
    @Column(name="NAME", nullable = false, length = 250)
    private String name;
    
    @Column(name="EMAIL", nullable = false, length = 45)
    private String email;
    
    @Column(name="AGE", nullable = false, length = 11)
    private int age;
    
    @Column(name="PASSWORD", nullable = false, length = 45)
    private String password;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    
}
