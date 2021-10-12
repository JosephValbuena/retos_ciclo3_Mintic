package com.sergioa.backendMinticReto3.controller;

import com.sergioa.backendMinticReto3.model.Costume;
import com.sergioa.backendMinticReto3.model.CostumeRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author josva
 */
@RestController
@RequestMapping("/api/Costume")
@CrossOrigin
public class CostumeController {
    
    @Autowired
    CostumeRepository repo;
    
    @GetMapping("/all")
    public List<Costume> getCostumes(){
        List<Costume> costumes = (List<Costume>) repo.findAll();
        return costumes;
    }
    
    @GetMapping("/costume/{id}")
    public Optional<Costume> getCostume(@PathVariable int id){
        return repo.findById(id);
    }
    
    @PostMapping("/save")
    public Costume createCostume(@RequestBody Costume costume){
        return repo.save(costume);
    }
    
}
