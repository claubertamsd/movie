package com.dev.movie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.movie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
   User findByEmail(String email);
}
