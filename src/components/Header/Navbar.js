import React, { Component } from 'react'
import './Navbar.css'
import { Outlet, Link } from "react-router-dom";

class Navbar extends Component{
  state = {clicked:false}
  handleclick = () =>{
    this.setState({clicked:!this.state.clicked})
  }
  render() {
  return (
    <>
    <nav>
      <a href = "index.html">
        <img src="Logo.png" alt="logo" width="250px" height="250px" />
      </a>
      <div>
        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
          <li>
            <Link to = "/">HOME</Link>
          </li>
          <li>
            <Link to = "/offerings/" >OFFERINGS</Link>
          </li>
          <li>
            <Link to = "/about/">ABOUT</Link>
          </li>
          <li>
            <Link to ="/whats-new/">WHAT'S NEW?</Link>
          </li>
          <li>
            <Link to ="/contact-us/">CONTACT</Link>
          </li>
        </ul>
      </div>
      <div id='mobile' onClick={this.handleclick}>
        <i id='bar'
        className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav>
    <Outlet />
    </>
  )
}
}

export default Navbar