package com.sergioa.backendMinticReto3.controller;

import com.sergioa.backendMinticReto3.model.Client;
import com.sergioa.backendMinticReto3.model.ClientRepository;
import com.sergioa.backendMinticReto3.model.Costume;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author josva
 */

@RestController
@RequestMapping("/api/Client")
@CrossOrigin
public class ClientController {
    
    
    
    @Autowired
    ClientRepository repositorio;
    
    @GetMapping("/all")
    public List<Client> getClients(){
        List<Client> clientes = (List<Client>) repositorio.findAll();
        return clientes;
    }
    
    @GetMapping("/client/{id}")
    public Optional<Client> getClient(@PathVariable int id){
        return repositorio.findById(id);
    }
    
    @PostMapping("/save")
    public Client createClient(@RequestBody Client client){
        return repositorio.save(client);
    }
}
