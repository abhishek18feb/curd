import React, { Component } from 'react';
import Layout from '../../../Layout/Layout';
import axios from '../../../axios';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import './Edit.css';


class Edit extends React.Component {
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
        	},
        	redirect:false
        }
	}
	componentDidMount(){
		let updatedArray=this.props.storedResult.filter(result=>result._id === this.props.match.params.id)
		
		this.setState({
			formControls:{
				name:{
        			value: updatedArray[0].name
        		},
        		email:{
        			value:updatedArray[0].email
        		},
        		mobile:{
        			value:updatedArray[0].mobile
        		},
        		employee_type:{
        			value:updatedArray[0].employee_type
        		}
			}
		})
		console.log(this.state.formControls)
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
	  	axios.patch('/employee/update/'+this.props.match.params.id, {
		    name: this.state.formControls.name.value,
		    email: this.state.formControls.email.value,
		    mobile: this.state.formControls.mobile.value,
		    employee_type: this.state.formControls.employee_type.value
		})
		.then((response) => {
		    console.log(response);
		    this.setState({redirect:true})
		    //this.props.history.push('/');
		})
		.catch(function (error) {
		    console.log(error);
		});
	  	console.dir(this.state.formControls); //will give us the name value
	}
	setRedirect = () => {
	    this.setState({
	      redirect: true
	    })
	  }
	

    render() {
    	if (this.state.redirect) {
	      // redirect to home if signed up
	      return <Redirect to = {{ pathname: "/" }} />;
	    }
	    //var selected = (this.state.formControls.employee_type==='Part_Time') ? 'selected' : 'false';
        return (
            <Layout>
				<h3>Employee Edit</h3>
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
					         		<select name="employee_type" value={this.state.formControls.employee_type.value} onChange={this.changeHandler}>
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

const mapStateToProps = state =>{
	return {
		storedResult:state.emp.results
	}
}

export default connect(mapStateToProps) (withRouter(Edit));