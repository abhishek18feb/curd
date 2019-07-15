import React, { Suspense, lazy} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
const EmployeeAdd = React.lazy(() => import('./Backend/Employee/Add/Add'));
const EmployeeEdit=React.lazy(()=>import('./Backend/Employee/Edit/Edit'))
const Dashboard = React.lazy(() => import('./Backend/Dashboard/Dashboard'));
const Wage = React.lazy(() => import('./Backend/Wage/Wage'));
function App() {
  return (
    <div className="App">
	   	<Suspense fallback={<div>Loading...</div>}>
	    	<Route path="/employee/add" exact component={EmployeeAdd} />
	    	<Route path="/employee/edit/:id" exact component={EmployeeEdit} />
	    	<Route path="/wage" exact component={Wage} />
	    	<Route path="/" exact component={Dashboard} />
     	</Suspense>
    </div>
  );
} 

export default App;
