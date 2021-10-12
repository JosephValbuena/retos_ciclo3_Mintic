package com.sergioa.backendMinticReto3.controller;

import com.sergioa.backendMinticReto3.model.Admin;
import com.sergioa.backendMinticReto3.model.AdminRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author josva
 */
@RestController
@RequestMapping("/api/Admin")
@CrossOrigin
public class AdminController {
    
    @Autowired
    AdminRepository repositorio;
    
    @GetMapping("/all")
    public List<Admin> getAdmins(){
       List<Admin> admins = (List<Admin>) repositorio.findAll();
       return admins;
    }
    
    @PostMapping("/save")
    public Admin createAdmins(@RequestBody Admin client){
        return repositorio.save(client);
    }
}
