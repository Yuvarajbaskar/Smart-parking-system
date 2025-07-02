
package com.parking.controller;

import com.parking.model.ParkingSlot;
import com.parking.repository.ParkingSlotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/parking")
@CrossOrigin(origins = "*")
public class ParkingController {

    @Autowired
    private ParkingSlotRepository repository;

    @GetMapping("/slots")
    public List<ParkingSlot> getAllSlots() {
        return repository.findAll();
    }

    @PostMapping("/book/{id}")
    public ResponseEntity<String> bookSlot(@PathVariable Long id) {
        Optional<ParkingSlot> slotOpt = repository.findById(id);
        if (slotOpt.isPresent() && slotOpt.get().isAvailable()) {
            ParkingSlot slot = slotOpt.get();
            slot.setAvailable(false);
            repository.save(slot);
            return ResponseEntity.ok("Slot booked");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Slot unavailable");
    }
}
