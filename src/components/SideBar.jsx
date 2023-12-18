import React from "react";
import logo from '../assets/images/logo-DH.png'
import '../assets/css/app.css'


import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={logo} alt="Digital House" />
          </div>
        </a>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>
              <Link to='/'>Dashboard - DH movies</Link>
            </span>
          </a>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Actions</div>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/">
            <i className="fas fa-fw fa-folder" />
            <span>
              <Link to='/genresInDB'>Genres</Link>
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-chart-area" />
            <span>
              <Link to='/lastMovieInDB'>Last movie in DB</Link>
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-table" />
            <span>
              <Link to='/tables'>Tables</Link>
            </span>

          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-table" />
            <span>
              <Link to='/search'>Search</Link>
            </span>

          </a>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>

    </>
  )
}

export default SideBar