package com.nocountry.equipo_C34_37.repository;

import com.nocountry.equipo_C34_37.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketRepository extends JpaRepository<Ticket,Long> {
    List<Ticket> findByAssignedToIsNull();

    List<Ticket>findByCreatedByContaining(String email);
}
