package com.sergioa.backendMinticReto3.controller;

import com.sergioa.backendMinticReto3.model.Booking;
import com.sergioa.backendMinticReto3.model.BookingRepository;
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
@RequestMapping("/api/Reservation")
@CrossOrigin
public class BookingController {

    @Autowired
    BookingRepository repo;
    
    @GetMapping("/all")
    public List<Booking> getBookings(){
        List<Booking> bookings = (List<Booking>) repo.findAll();
        return bookings;
    }
    
    @PostMapping("/save")
    public Booking createBooking(@RequestBody Booking booking){
        return repo.save(booking);
    }
    
}
