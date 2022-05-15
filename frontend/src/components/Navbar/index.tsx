import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './style.css';
function Navbar(){
    return (
        <header>
          <nav className="container">
            <div className='fmovie-nav-content'>
              <a href="/"><h1 >Avalie seu Filme</h1></a>
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