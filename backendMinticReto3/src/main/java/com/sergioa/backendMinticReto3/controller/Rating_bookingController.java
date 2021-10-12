package com.sergioa.backendMinticReto3.controller;

import com.sergioa.backendMinticReto3.model.Rating_booking;
import com.sergioa.backendMinticReto3.model.Rating_bookingRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author josva
 */
@RestController
@RequestMapping("/api/Score")
public class Rating_bookingController {
    
    @Autowired
    Rating_bookingRepository repo;
    
    @GetMapping("/all")
    public List<Rating_booking> getScores(){
        List<Rating_booking> scores = (List<Rating_booking>) repo.findAll();
        return scores;
    }
    
    @PostMapping("/save")
    public Rating_booking createScore(@RequestBody Rating_booking score){
        return repo.save(score);
    }
    
}
