import { ReactComponent as Arrow } from "assets/img/arrow.svg";
import './style.css'

function Pagination() {
  return (
    <div className="fmovie-pagination-container">
      <div className="fmovie-pagination-box">
        <button className="fmovie-pagination-button" disabled={true}>
          <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="fmovie-pagination-button" disabled={false}>
          <Arrow className="fmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
