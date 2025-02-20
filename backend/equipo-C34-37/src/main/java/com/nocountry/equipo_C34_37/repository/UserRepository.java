package com.nocountry.equipo_C34_37.repository;

import com.nocountry.equipo_C34_37.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email); // Buscar usuario por email
}