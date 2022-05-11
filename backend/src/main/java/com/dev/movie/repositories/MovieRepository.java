package com.dev.movie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.movie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
