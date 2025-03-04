package com.nocountry.equipo_C34_37.controller;

import com.nocountry.equipo_C34_37.dto.JwtResponse;
import com.nocountry.equipo_C34_37.dto.LoginRequest;
import com.nocountry.equipo_C34_37.dto.RegisterRequest;
import com.nocountry.equipo_C34_37.model.Role;
import com.nocountry.equipo_C34_37.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest registerRequest) {
        Role defaultRole = Role.USER;
        authService.register(registerRequest, defaultRole);
        return ResponseEntity.ok("Usuario registrado exitosamente");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        String token = authService.login(loginRequest);
        return ResponseEntity.ok(new JwtResponse(token));
    }
}