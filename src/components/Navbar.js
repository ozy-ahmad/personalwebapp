import React, { Component } from "react";
import "../components/assets/styles/navbar.css";
// import Header from "./Header";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
          <span className="textLogo">21 AM</span>
        <nav>
          <ul className="navLinks">
            <li> <a href="#">Home</a> </li>
            <li> <a href="#">Portfolio</a></li>
            <li> <a href="#">Blog</a></li>
            <li> <a href="#">Podcast</a></li>
            <li> <a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
