import React, { Component } from 'react';
import Layout from '../../../Layout/Layout';
import './Add.css';
const axios = require('axios');

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	formControls:{
        		name:{
        			value: ''
        		},
        		email:{
        			value:''
        		},
        		mobile:{
        			value:''
        		},
        		employee_type:{
        			value:''
        		}
        	}
        }
	}


    changeHandler = event => {
	    const name = event.target.name;
	    const value = event.target.value;
	    
	    this.setState({
	        formControls: {
	            ...this.state.formControls,
	            [name]: {
	            ...this.state.formControls[name],
	            value
	          }
	        }
	    });
	}

	submitFormHandler = event => {
	  	event.preventDefault();
	  	axios.post('http://localhost:5000/employee/add', {
		    name: this.state.formControls.name.value,
		    email: this.state.formControls.email.value,
		    mobile: this.state.formControls.mobile.value,
		    employee_type: this.state.formControls.employee_type.value
		})
		.then(function (response) {
		    console.log(response);
		})
		.catch(function (error) {
		    console.log(error);
		});
	  	console.dir(this.state.formControls); //will give us the name value
	}

    render() {
        return (
            <Layout>
				<div className="container">
					   	<form onSubmit={this.submitFormHandler}>
					      	<div className="row">
					         	<div className="col-25">
					            	<label htmlFor="fname">First Name</label>
					         	</div>
					         	<div className="col-75">
					            	<input type="text" id="fname" name="name" 
					            		value={this.state.formControls.name.value} 
					            		placeholder="Your name.." onChange={this.changeHandler}  />
					         	</div>
					      	</div>
					      	
					   		<div className="row">
					         	<div className="col-25">
					           		<label htmlFor="email">Email</label>
					         	</div>
					         	<div className="col-75">
					            	<input type="text" id="email" name="email" 
					            	value={this.state.formControls.email.value}
					            	placeholder="Your email.." onChange={this.changeHandler}  />
					         	</div>
					      	</div>
					      	<div className="row">
					         	<div className="col-25">
					           		<label htmlFor="mobile">Mobile</label>
					         	</div>
					         	<div className="col-75">
					            	<input type="text" id="mobile" name="mobile"
					            	value={this.state.formControls.mobile.value}
					            	 placeholder="Your mobile.." onChange={this.changeHandler}  />
					         	</div>
					      	</div>
					      	<div className="row">
					         	<div className="col-25">
					           		<label htmlFor="mobile">Employee Type</label>
					         	</div>
					         	<div className="col-75">
					         		<select name="employee_type" onChange={this.changeHandler}>
					         			<option value="">Select Emp Type</option>
					         			<option value="Permanent">Permanent</option>
					         			<option value="Part_Time">Part Time</option>
					         		</select>
					            </div>
					      	</div>
					     
					      <div className="row">
					         <input type="submit" value="Submit" />
					      </div>
					   	</form>
				</div>
			</Layout>
        );
    }
}

export default Add;