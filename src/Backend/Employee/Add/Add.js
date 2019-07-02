import React, { Component } from 'react';
import Layout from '../../../Layout/Layout';
import './Add.css';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	formControls:{
        		firstname:{
        			value: ''
        		},
        		lastname:{
        			value:''
        		},
        		email:{
        			value:''
        		},
        		mobile:{
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

    render() {
        return (
            <Layout>
				<div className="container">
					   	<form onSubmit={this.handleSubmit}>
					      	<div className="row">
					         	<div className="col-25">
					            	<label htmlFor="fname">First Name</label>
					         	</div>
					         	<div className="col-75">
					            	<input type="text" id="fname" name="firstname" 
					            		value={this.state.formControls.firstname.value} 
					            		placeholder="Your name.." onChange={this.changeHandler}  />
					         	</div>
					      	</div>
					      	<div className="row">
					         	<div className="col-25">
					           		<label htmlFor="lname">Last Name</label>
					         	</div>
					         	<div className="col-75">
					            	<input type="text" id="lname" name="lastname" 
					            	value={this.state.formControls.lastname.value} 
					            	placeholder="Your last name.." onChange={this.changeHandler}  />
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
					         <input type="submit" value="Submit" />
					      </div>
					   	</form>
				</div>
			</Layout>
        );
    }
}

export default Add;