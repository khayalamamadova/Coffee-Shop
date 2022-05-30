import React, { Component } from 'react'
import logo from '../assets/img/logo-2.png'
import flag from '../assets/img/en.png'



class Dropdown extends Component {
  render() {
    return (
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {this.props.menuName}
        </a>
        <ul className="dropdown-menu text-light" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">{this.props.dropdownName1}</a></li>
            <li><a className="dropdown-item" href="#">{this.props.dropdownName2}</a></li>
            <li><a className="dropdown-item" href="#">{this.props.dropdownName3}</a></li>
        </ul>
    </li>
    )
  }
}



class Nav extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg text-light">
                <div className="container-fluid d-flex justify-content-between">

                    <div className="left-box">
                    <span className="navbar" href="#"><i class="fa-solid fa-location-dot"></i>Are You Looking For A Best Deal?</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    </div>
                   

                    <div className="logo ">
                        <img src={logo} alt="logo" height={50} />
                    </div>


                    <div className="right-box">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                    <Dropdown menuName='My Account' dropdownName1="Log in/Register"  />

                    <Dropdown menuName='English' dropdownName1="Arabic"  dropdownName2="Chinese" dropdownName3="French" />
                           

                            <li className="nav-item">
                                <a className="nav-link text-light">USD</a>
                            </li>
                        </ul>
                    </div>
                    </div>


                </div>
            </nav>
        )
    }
}
export default Nav;