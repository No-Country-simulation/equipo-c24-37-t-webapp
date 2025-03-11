package com.nocountry.equipo_C34_37.service;

import com.nocountry.equipo_C34_37.dto.UserDTO;
import com.nocountry.equipo_C34_37.model.User;
import com.nocountry.equipo_C34_37.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public UserDTO getAuthenticatedUser(UserDetails userDetails) {
        if (userDetails == null) {
            throw new RuntimeException("Usuario no autenticado");
        }

        // Buscar el usuario en la base de datos usando el email del `UserDetails`
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        return new UserDTO(user.getFirstName(), user.getRole());
    }

}
