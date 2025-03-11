package com.nocountry.equipo_C34_37.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "tickets")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String title;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 25)
    private Priority priority;
    @Column(nullable = false, columnDefinition = "TEXT")
    private String message;
    @Column(nullable = false, length = 20)
    @Enumerated(EnumType.STRING)
    private Status status;
    @Column(nullable = false, length = 12)
    private LocalDate startDate;
    @Column(nullable = true, length = 12)
    private LocalDate endDate;
    @Column(nullable = true)
    private String assignedTo;
    @Column(nullable = false)
    private String createdBy;

    @OneToMany(mappedBy = "ticket", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Message> messages;

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

    public Ticket(Long id, String title, Priority priority, String message, Status status, LocalDate startDate, LocalDate endDate, String assignedTo, String createdBy, List<Message> messages) {
        this.id = id;
        this.title = title;
        this.priority = priority;
        this.message = message;
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
        this.assignedTo = assignedTo;
        this.createdBy = createdBy;
        this.messages = messages;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Priority getPriority() {
        return priority;
    }

    public void setPriority(Priority priority) {
        this.priority = priority;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
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

    public String getAssignedTo() {
        return assignedTo;
    }

    public void setAssignedTo(String assignedTo) {
        this.assignedTo = assignedTo;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public List<Message> getMessages() {
        return messages;
    }

    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }
}
