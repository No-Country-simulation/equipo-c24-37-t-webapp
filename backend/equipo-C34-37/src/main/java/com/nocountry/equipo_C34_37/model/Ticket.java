package com.nocountry.equipo_C34_37.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "tickets")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String subject;
    @Column(nullable = false, length = 25)
    private String priority;
    @Column(nullable = false, columnDefinition = "TEXT")
    private String message;
    @Column(nullable = false, length = 20)
    private String status;
    @Column(nullable = false, length = 12)
    private LocalDate startDate;
    @Column(nullable = true, length = 12)
    private LocalDate endDate;

    @OneToMany(mappedBy = "ticket", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Message> messages = new ArrayList<>();

/*
        This method when /api/tickets using METHODS POST create a tickets,
        automatically the attribute startDate get actually date.
 */
    @PrePersist
    protected void onCreate() {
        this.startDate = LocalDate.now();
    }

    public Ticket() {
    }

    public Ticket(Long id, String subject, String priority, String message, String status, LocalDate startDate, LocalDate endDate) {
        this.id = id;
        this.subject = subject;
        this.priority = priority;
        this.message = message;
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }
}
