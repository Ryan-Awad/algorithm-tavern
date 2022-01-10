import React, { Component } from 'react';

class Navbar extends Component {
  render() { 
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Algorithm Tavern</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">Register</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">Login</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">Admin Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
 
export default Navbar;