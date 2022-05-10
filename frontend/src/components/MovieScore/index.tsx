import MovieStars from "components/MovieStars";
import './style.css'

function MovieScore() {
    const score = 3.5;
    const count = 13;
  return (
    <div className="fmovie-score-container">
      <p className="fmovie-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <MovieStars />
      <p className="fmovie-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore;
