package com.dev.movie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.movie.entities.Score;
import com.dev.movie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
