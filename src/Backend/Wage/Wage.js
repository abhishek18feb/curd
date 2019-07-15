import React, {Component} from 'react';
import {connect} from 'react-redux';
import Layout from '../../Layout/Layout';
import axios from '../../axios';
import * as utility from './utility/utility';
import Button from '../../UI/Button/Button'; 
import './Wage.css';


class Wage extends Component{
	super(props){
		this.state={
			today:new Date(),
			arrayData:''
		}
		//this.forceUpdate();
	}
	componentWillMount(){
		let records = this.props.storedResult
		let stateArrayData = [];
		for(let i=0; i<records.length; i++){
			stateArrayData.push({
								id:records[i]._id,
								empName:records[i].name,
								startTime:'00:00',
								out:'00:00',
								in:'00:00',
								end:'00:00',
								ttlHrs:0,
								totalWage:0,
								today:new Date(),
							})
		}
		this.setState({ arrayData: stateArrayData})
		//console.log(this.state.arrayData)
	}
	setDateHandler = (today) =>{
		console.log(today);
		this.setState({today: new Date(today)})
		console.log(this.state.arrayData)
	}

	changeHandler =(event, i)=>{
		const name = event.target.name;
	    const value = event.target.value;
	    console.log(name)
	    console.log(value)
	    console.log(i)
		let oldValues = [...this.state.arrayData];
		console.log(oldValues);
		oldValues[i][name] = value;
		oldValues[i]['today'] = this.state.today;
		this.setState({arrayData: oldValues})
	}

	render(){
		let weekDays = utility.dates(new Date())
		let stateData = undefined;
		if(typeof  this.state.arrayData !== 'undefined'){
			stateData = this.state.arrayData.map((emp, i)=>(
									<tr key={emp.id}>
										<td>{emp.empName}</td>
										<td><input type="text" name="startTime"
										value={this.state.arrayData[i].startTime}
										onChange={(event) => this.changeHandler(event,i)}
										/></td>
										<td><input type="text" name="out"
										value={this.state.arrayData[i].out} 
										onChange={(event) => this.changeHandler(event,i)}
										/></td>
										<td><input type="text" name="in"
										value={this.state.arrayData[i].in} 
										onChange={(event) => this.changeHandler(event,i)}
										/></td>
										<td><input type="text" name="end"
										value={this.state.arrayData[i].end}
										onChange={(event) => this.changeHandler(event,i)}
										/></td>
										<td><input type="text" name="ttlHrs"
										value={this.state.arrayData[i].ttlHrs} 
										onChange={(event) => this.changeHandler(event,i)}
										/></td>
										<td><input type="text" name="totalWage"
										value={this.state.arrayData[i].totalWage}
										onChange={(event) => this.changeHandler(event,i)}
										/></td>
									</tr>
								))
		}
		return(
			<Layout>
            	<h3>Employee Wages</h3>
				<div className="container">
					{
						weekDays.map((day, index)=>
							<span className="a" onClick={()=>this.setDateHandler(day)} key={index}>
								{  utility.days[day.getDay()]}
							</span>
					)}
				</div>
				<div className="container">
					<table id="customers">
					  	<thead>
						  <tr>
						    <th>Name</th>
						    <th>Start Time</th>
						    <th>Out</th>
						    <th>In</th>
						    <th>End Time</th>
						    <th>TTL Hrs</th>
						    <th>Total Wage</th>
						    <th>Action</th>
						  </tr>
					  	</thead>
					  	<tbody>
							{
								stateData
							}				
						</tbody>
					</table>
					<Button btnType="">Save</Button>
				</div>
			</Layout>
		)
	}

}

const mapStateToProps = state=>{
	return {
		storedResult: state.emp.results
	}
}
export default connect(mapStateToProps, null)(Wage);