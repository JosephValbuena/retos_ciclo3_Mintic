package com.sergioa.backendMinticReto3.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author josva
 */

@Repository
public interface Rating_bookingRepository extends CrudRepository<Rating_booking, Integer>{
    
}
