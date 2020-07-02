import React from 'react';
import Searchbar from './Searchbar';

export default Navbar;

function Navbar({onsearch}){        //destrutturiamo e prendiamo solo il props che vogliamo
    return( 
<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light px-5">
  <a className="navbar-brand" href="#">Films</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      
    </ul>
    <Searchbar onsearch={onsearch}></Searchbar>
  </div>
</nav>
    )
}