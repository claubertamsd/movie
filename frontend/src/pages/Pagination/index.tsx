import { ReactComponent as Arrow } from "assets/img/arrow.svg";
import { MoviePage } from "types/movie";
import './style.css'

type Props ={
  page: MoviePage;
  onChange: Function;
}

function Pagination({page, onChange} : Props) {
  
  return (
    <div className="fmovie-pagination-container">
      <div className="fmovie-pagination-box">
        <button className="fmovie-pagination-button" disabled={page.first} onClick={() => onChange(page.number -1)}>
          <Arrow />
        </button>
        <p>{`${page.number +1} de ${page.totalPages}`}</p>
        <button className="fmovie-pagination-button" disabled={page.last} onClick={() => onChange(page.number + 1)}>
          <Arrow className="fmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
