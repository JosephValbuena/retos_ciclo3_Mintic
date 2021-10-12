package com.sergioa.backendMinticReto3.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author josva
 */

@Repository
public interface MessageRepository extends CrudRepository<Message, Integer>{
    
}
