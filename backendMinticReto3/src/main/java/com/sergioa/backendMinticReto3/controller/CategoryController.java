package com.sergioa.backendMinticReto3.controller;

import com.sergioa.backendMinticReto3.model.Category;
import com.sergioa.backendMinticReto3.model.CategoryRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author josva
 */
@RequestMapping("/api/Category")
@RestController
@CrossOrigin
public class CategoryController {
    
    @Autowired
    CategoryRepository repositorio;
    
    @GetMapping("/all")
    public List<Category> getCategories(){
        List<Category> categories = (List<Category>) repositorio.findAll();
        return categories;
    }
    
    @PostMapping("/save")
    public Category createCategory(@RequestBody Category category){
        return repositorio.save(category);
    }
    
}
