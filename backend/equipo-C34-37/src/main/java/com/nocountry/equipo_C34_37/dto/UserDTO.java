package com.nocountry.equipo_C34_37.dto;

import com.nocountry.equipo_C34_37.model.Role;

public class UserDTO {

    private String firstname;
    private Role role;

    public UserDTO(String firstname, Role role) {
        this.firstname = firstname;
        this.role = role;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
