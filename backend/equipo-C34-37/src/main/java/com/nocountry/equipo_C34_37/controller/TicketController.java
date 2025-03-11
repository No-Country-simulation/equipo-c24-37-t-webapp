package com.nocountry.equipo_C34_37.controller;

import com.nocountry.equipo_C34_37.dto.TicketDTO;
import com.nocountry.equipo_C34_37.model.*;
import com.nocountry.equipo_C34_37.service.MessageService;
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

    @Autowired
    private MessageService messageService;

    @GetMapping
    public List<Ticket> getAllTickets() {
        return ticketService.getAllTickets();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ticket> getTicketByID(@PathVariable("id") Long id) {
        return ticketService.getTicketById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Ticket> createTicket(@RequestBody Ticket ticket) {
        Ticket savedTicket = ticketService.createTicket(ticket);
        return ResponseEntity.ok(savedTicket);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTicket(@PathVariable("id") Long id) {
        if (!ticketService.getTicketById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        ticketService.deleteTicket(id);
        return ResponseEntity.noContent().build();
    }


//    Message

    @PostMapping("/{id}/messages")
    public ResponseEntity<Message> addMessage(@PathVariable("id") Long id, @RequestBody Message message) {
        return ResponseEntity.ok(messageService.addMessageToTicket(id, message));
    }

    @GetMapping("/{id}/messages")
    public ResponseEntity<List<Message>> getMessages(@PathVariable("id") Long id) {
        return ResponseEntity.ok(messageService.getMessagesByTicket(id));
    }

//    AssignedTo

    @PatchMapping("/{id}/assign")
    public ResponseEntity<Ticket> assignTicket(@PathVariable("id") Long id) {
        try {
            Ticket updatedTicket = ticketService.assignTicket(id);
            return ResponseEntity.ok(updatedTicket);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping("/unassigned")
    public List<Ticket> getUnassignedTickets() {
        return ticketService.getUnassignedTickets();
    }

//    Dashboard

    @GetMapping("/dashboard")
    public List<TicketDTO> getUserTicketsForDashboard() {
        return ticketService.getTicketsForCurrentUser();
    }


//    Priorities & Status

    @GetMapping("/priorities")
    public Priority[] getPriorities() {
        return Priority.values();
    }

    @GetMapping("/status")
    public Status[] getStatuses() {
        return Status.values();
    }

}
