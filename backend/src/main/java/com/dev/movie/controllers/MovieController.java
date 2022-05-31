package com.dev.movie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.movie.dto.MovieDTO;
import com.dev.movie.entities.Movie;
import com.dev.movie.services.MovieService;

import javax.annotation.security.RolesAllowed;

@RestController
@RequestMapping(value ="/movies")
public class MovieController {
	
	@Autowired
	private MovieService service;

	@RolesAllowed("user")
	@GetMapping
	public Page<MovieDTO> findAll(Pageable pageable){
		return service.findAll(pageable);
	}

	@GetMapping(value="/{id}")
	public MovieDTO findById(@PathVariable Long id){
		return service.findById(id);
	}


	@PostMapping(value="/posts")
	public MovieDTO save (@RequestBody Movie movie){
		MovieDTO movieDTO = service.saveMovie(movie);
		return movieDTO;
	}
}
