package com.nocountry.equipo_C34_37.dto;

import com.nocountry.equipo_C34_37.model.Priority;
import com.nocountry.equipo_C34_37.model.Status;

import java.time.LocalDate;

public class TicketDTO {

    private Long id;
    private String createdBy;
    private String title;
    private String assignedTo;
    private Priority priority;
    private Status status;
    private LocalDate startDate;

    public TicketDTO() {
    }

    public TicketDTO(Long id, String createdBy, String title, String assignedTo, Priority priority, Status status, LocalDate startDate) {
        this.id = id;
        this.createdBy = createdBy;
        this.title = title;
        this.assignedTo = assignedTo;
        this.priority = priority;
        this.status = status;
        this.startDate = startDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAssignedTo() {
        return assignedTo;
    }

    public void setAssignedTo(String assignedTo) {
        this.assignedTo = assignedTo;
    }

    public Priority getPriority() {
        return priority;
    }

    public void setPriority(Priority priority) {
        this.priority = priority;
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
}
