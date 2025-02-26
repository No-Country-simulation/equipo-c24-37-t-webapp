package com.nocountry.equipo_C34_37.dto;

public class JwtResponse {
    private String token;

    // Constructor
    public JwtResponse(String token) {
        this.token = token;
    }

    // Getter
    public String getToken() {
        return token;
    }

    // Setter
    public void setToken(String token) {
        this.token = token;
    }
}