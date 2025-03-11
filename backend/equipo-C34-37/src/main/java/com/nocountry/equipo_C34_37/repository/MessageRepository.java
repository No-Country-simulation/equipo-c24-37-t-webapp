package com.nocountry.equipo_C34_37.repository;

import com.nocountry.equipo_C34_37.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message,Long> {
    List<Message> findByTicketId(Long ticketId);
}
