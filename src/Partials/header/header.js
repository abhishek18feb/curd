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
		<div class="navbar">
		  <NavLink to="/" exact>Home</NavLink>
		  <a href="#news">News</a>
		  <div class="dropdown">
		    <button class="dropbtn">Employee 
		      <i class="fa fa-caret-down"></i>
		    </button>
		    <div class="dropdown-content">
		      <NavLink to="/employee/add">Employee Add</NavLink>
		      <a href="#">Link 2</a>
		      <a href="#">Link 3</a>
		    </div>
		  </div> 
		</div>


	)
export default header;