import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

import {NavLink} from 'react-router-dom'
import "../css/Design.css"
const Menu=()=>{
    return(

        <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
            <div className="row">
                <div className="col-5">
                  <NavLink exact to="/">
          <h5 className="nameh pt-2 pb-1">AHSAN <span style={{color:"skyblue"}}> Tipu</span></h5>
          </NavLink>
          </div>
          <div className="col-7">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" exact to="/" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  exact to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
              </li>
            </ul>
            </div>
          </div>
        </div>
        </div>
      </nav>
   
        </div>
    )
}

export default Menu;