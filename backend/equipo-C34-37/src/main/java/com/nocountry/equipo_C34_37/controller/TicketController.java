package com.nocountry.equipo_C34_37.controller;

import com.nocountry.equipo_C34_37.model.Ticket;
import com.nocountry.equipo_C34_37.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    @GetMapping
    public List<Ticket> getAllTickets(){
        return ticketService.getAllTickets();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ticket> getTicketByID(@PathVariable Long id){
        return ticketService.getTicketById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Ticket createTicket(@RequestBody Ticket ticket){
        return ticketService.createTicket(ticket);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTicket(@PathVariable Long id) {
        if (!ticketService.getTicketById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        ticketService.deleteTicket(id);
        return ResponseEntity.noContent().build();
    }
}
