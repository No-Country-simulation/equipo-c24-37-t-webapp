package com.nocountry.equipo_C34_37.service;

import com.nocountry.equipo_C34_37.model.Message;
import com.nocountry.equipo_C34_37.model.Ticket;
import com.nocountry.equipo_C34_37.repository.MessageRepository;
import com.nocountry.equipo_C34_37.security.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private TicketService ticketService;

    @Autowired
    UserDetailsServiceImpl userDetailsService;

    public Message addMessageToTicket(Long tickedID, Message message){

        String email = getAuthenticatedUser();
        String fullUserNameWithEmail = userDetailsService.getFullNameByEmail(email);

        Ticket ticket = ticketService.getTicketById(tickedID)
                .orElseThrow(() -> new RuntimeException("Ticket no encontrado"));

        message.setTicket(ticket);
        message.setSender(fullUserNameWithEmail);
        return messageRepository.save(message);
    }

    public List<Message> getMessagesByTicket(Long tickedID){
        return messageRepository.findByTicketId(tickedID);
    }

    public String getAuthenticatedUser(){
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(principal instanceof UserDetails){
            return ((UserDetails) principal).getUsername();
        } else {
            return principal.toString();
        }
    }


}
