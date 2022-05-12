package com.dev.movie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.movie.dto.MovieDTO;
import com.dev.movie.dto.ScoreDTO;
import com.dev.movie.services.ScoreService;

@RestController
@RequestMapping(value ="/scores")
public class ScoreController {
	
    @Autowired
	private ScoreService service;
	@PutMapping()
	   public MovieDTO SaveScore(@RequestBody ScoreDTO dto){
		  MovieDTO movieDTO = service.saveScore(dto);
		  return movieDTO;
	  }
}
;