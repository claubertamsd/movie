import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './style.css';
function Navbar(){
    return (
        <header>
          <nav className="container">
            <div className='fmovie-nav-content'>
              <h1>Filmes</h1>
              <a href="https://github.com/claubertamsd">
              <div className="fmovie-contact-container">
                <GithubIcon/>
                <p className="fmovie-contact-link">/claubertamsd</p>
              </div>
             </a>
            </div>
          </nav>
        </header>
       );
}

export default Navbar;