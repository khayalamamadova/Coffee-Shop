import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
        <header className="navbar navbar-expand-lg text-uppercase">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold mx-2">
              <li className="nav-item ">
                <a className="nav-link active text-dark" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-dark " href="#">SHOP</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">pages</a>
              </li>              
              <li className="nav-item mx-2">
                <a className="nav-link text-dark" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Contact</a>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link text-dark">Blog</a>
              </li>
            </ul>
            <form className="d-flex fs-5" role="search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-heart mx-4"></i>
            <i class="fa-solid fa-basket-shopping"></i>

            </form>
          </div>
        </div>
      </header>
    )
  }
}

export default Navbar