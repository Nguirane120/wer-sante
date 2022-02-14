import React from 'react'
import Header from './Header'
import './Navbar.css'

const Navabar = () => {
  return (
      <>
    <nav className="navbar navbar-expand-lg navbar-primary bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src="logo.jpg" className='rounded-circle' alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Accueil</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Mes Remboursements</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sante</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Ma carte</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Ma carte</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Connexion</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Deconnexion</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Header/>
</>
  )
}

export default Navabar