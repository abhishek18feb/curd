import React from 'react';
import './header.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,NavLink,
  Redirect
} from "react-router-dom";

const header = ()=>(
		<div className="navbar">
		  <NavLink to="/" exact>Home</NavLink>
		  <div className="dropdown">
		    <button className="dropbtn">Employee 
		      <i className="fa fa-caret-down"></i>
		    </button>
		    <div className="dropdown-content">
		      <NavLink to="/employee/add">Employee Add</NavLink>
		      <a href="#">Link 2</a>
		      <a href="#">Link 3</a>
		    </div>
		    <NavLink to="/wage">Wages</NavLink>
		  </div> 
		</div>


	)
export default header;