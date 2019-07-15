import React, {Component} from 'react';
import Layout from '../../Layout/Layout';
import axios from '../../axios';
import './Wage.css';
import {connect} from 'react-redux';

class Wage extends Component{
	super(props){
		this.state={
			today:null
		}
	}
	setDateHandler = today =>{
			
	}
	render(){

		const dates = (current) => {
		    var week= new Array(); 
		    // Starting Monday not Sunday
		    current.setDate((current.getDate() - current.getDay() +1));
		    for (var i = 0; i < 7; i++) {
		    	let date = 
		    	week.push(
		    		new Date(current)
		        ); 
		        current.setDate(current.getDate() +1);
		    }
		    return week; 
		}
		let weekDays = dates(new Date())
		return(
			<Layout>
            	<h3>Employee Wages</h3>
				<div className="container">
					<span className="a">Monday</span>
					<span className="a">Tuesday</span>
					<span className="a">Wednesday</span>
					<span className="a">Thursday</span>
					<span className="a">Friday</span>
				</div>
			</Layout>
		)
	}

}

export default Wage;