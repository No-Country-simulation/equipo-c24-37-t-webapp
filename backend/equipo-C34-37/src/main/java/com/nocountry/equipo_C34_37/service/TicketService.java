package com.nocountry.equipo_C34_37.service;

import com.nocountry.equipo_C34_37.dto.TicketDTO;
import com.nocountry.equipo_C34_37.model.Ticket;
import com.nocountry.equipo_C34_37.repository.TicketRepository;
import com.nocountry.equipo_C34_37.security.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private UserDetailsServiceImpl userDetails;

    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    public Optional<Ticket> getTicketById(Long id) {
        return ticketRepository.findById(id);
    }

    public Ticket createTicket(Ticket ticket) {
        String email = getAuthenticatedUser();
        String fullNameWithEmail = userDetails.getFullNameByEmail(email);
        ticket.setCreatedBy(fullNameWithEmail);
        return ticketRepository.save(ticket);
    }

    public void deleteTicket(Long id) {
        ticketRepository.deleteById(id);
    }

//    AssignedTo

    public Ticket assignTicket(Long id) {
        String email = getAuthenticatedUser();
        String fullNameWithEmail = userDetails.getFullNameByEmail(email);

        Optional<Ticket> optionalTicket = ticketRepository.findById(id);
        if (optionalTicket.isPresent()) {
            Ticket ticket = optionalTicket.get();

            // Verifica si el ticket ya fue asignado
            if (ticket.getAssignedTo() != null) {
                throw new RuntimeException("El ticket ya ha sido asignado");
            }

            ticket.setAssignedTo(fullNameWithEmail); // Asigna el ticket al usuario autenticado
            return ticketRepository.save(ticket);
        }
        throw new RuntimeException("Ticket no encontrado");
    }

//    Dashboard

    public List<TicketDTO> getTicketsForCurrentUser() {
        String email = getAuthenticatedUser(); // Obtiene el email autenticado

        List<Ticket> tickets = ticketRepository.findByCreatedByContaining(email); // Busca por email

        return tickets.stream()
                .map(ticket -> new TicketDTO(
                        ticket.getId(),
                        ticket.getCreatedBy(),
                        ticket.getTitle(),
                        ticket.getAssignedTo(),
                        ticket.getPriority(),
                        ticket.getStatus(),
                        ticket.getStartDate()
                ))
                .collect(Collectors.toList());
    }


    public List<Ticket> getUnassignedTickets() {
        return ticketRepository.findByAssignedToIsNull();
    }

    private String getAuthenticatedUser() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof UserDetails) {
            return ((UserDetails) principal).getUsername();
        } else {
            return principal.toString();
        }
    }
}


