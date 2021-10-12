package com.sergioa.backendMinticReto3.controller;

import com.sergioa.backendMinticReto3.model.Message;
import com.sergioa.backendMinticReto3.model.MessageRepository;
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
@CrossOrigin
@RequestMapping("/api/Message")
public class MessageController {
    
    @Autowired
    MessageRepository repo;
    
    @GetMapping("/all")
    public List<Message> getMessages(){
        List<Message> messages = (List<Message>) repo.findAll();
        return messages;
    }
    
    @PostMapping("/save")
    public Message createMessage(@RequestBody Message message){
        return repo.save(message);
    }
}
