package com.nocountry.equipo_C34_37.repository;

import com.nocountry.equipo_C34_37.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends JpaRepository<Ticket,Long> {
}
