import { Link, link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Agenda</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link" href="#">Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/employes" className="nav-link" href="#">Employés</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/reunions" className="nav-link" href="#">Réunions</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;