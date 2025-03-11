package com.nocountry.equipo_C34_37.controller;

import com.nocountry.equipo_C34_37.dto.UserDTO;
import com.nocountry.equipo_C34_37.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/me")
    public UserDTO getAuthenticatedUser(@AuthenticationPrincipal UserDetails userDetails) {
        return userService.getAuthenticatedUser(userDetails);
    }
}
