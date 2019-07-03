import React, {Component} from 'react';
import Layout from '../../Layout/Layout';
import axios from '../../axios';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/employee';
import './Dashboard.css';


class Dashboard extends React.Component{
	constructor(props) {
	    super(props);
	}
	componentDidMount(){
		axios.get('/employee')
		.then((response)=>{
			//console.log(response.data.result.employee);
			let data = response.data.result.employee;
			console.log(data.length, this.props.storedResult.length)
			if(data.length !== this.props.storedResult.length){
				this.props.updateAllEmployee(response.data.result.employee);
			}
			console.log(this.props.storedResult)
		})
		.catch((error)=>console.log(error))		
	}
	render(){
		
		return(
			<Layout>
				<div className="container">
					<table id="customers">
					  	<thead>
						  <tr>
						    <th>Name</th>
						    <th>Email</th>
						    <th>Mobile</th>
						    <th>Employee Type</th>
						  </tr>
					  	</thead>
					  	<tbody>
							{
								this.props.storedResult.map((emp)=>(
										<tr key={emp._id}>
											<td>{emp.name}</td>
											<td>{emp.email}</td>
											<td>{emp.mobile}</td>
											<td>{emp.employee_type}</td>
										</tr>
									))
							}				
						</tbody>
					</table>
   
				</div>
			</Layout>
		);
	}
}

const mapStateToProps = state =>{
	return {
		storedResult: state.emp.results
	}
}

const mapDispatchToProps = dispatch =>{
	return {
		updateAllEmployee: (response)=>dispatch(actionCreators.listEmployee(response)) 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
