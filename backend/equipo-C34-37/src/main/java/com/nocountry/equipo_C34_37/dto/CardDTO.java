package com.nocountry.equipo_C34_37.dto;

import com.nocountry.equipo_C34_37.model.Priority;
import com.nocountry.equipo_C34_37.model.Status;

import java.time.LocalDate;

public class CardDTO {

    private Long id;
    private String title;
    private Priority priority;
    private Status status;
    private String assignedTo;
    private LocalDate startDate;

    public CardDTO(Long id, String title, Priority priority, Status status, String assignedTo, LocalDate startDate) {
        this.id = id;
        this.title = title;
        this.priority = priority;
        this.status = status;
        this.assignedTo = assignedTo;
        this.startDate = startDate;
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

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getAssignedTo() {
        return assignedTo;
    }

    public void setAssignedTo(String assignedTo) {
        this.assignedTo = assignedTo;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }
}
