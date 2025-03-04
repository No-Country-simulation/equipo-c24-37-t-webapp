package com.nocountry.equipo_C34_37.service;

import com.nocountry.equipo_C34_37.dto.LoginRequest;
import com.nocountry.equipo_C34_37.dto.RegisterRequest;
import com.nocountry.equipo_C34_37.model.Role;
import com.nocountry.equipo_C34_37.model.User;
import com.nocountry.equipo_C34_37.repository.UserRepository;
import com.nocountry.equipo_C34_37.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;

    // Método para registrar un nuevo usuario
    public void register(RegisterRequest registerRequest, Role role) {
        User user = new User();
        user.setFirstName(registerRequest.getFirstName());
        user.setLastName(registerRequest.getLastName());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        user.setRole(role);
        userRepository.save(user);
    }

    // Método para autenticar un usuario y generar un token JWT
    public String login(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return jwtUtils.generateToken(authentication);
    }
}