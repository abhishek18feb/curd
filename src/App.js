import React from 'react';
import logo from './logo.svg';
const EmployeeAdd = React.lazy(() => import('./Backend/Employee/Add/Add'));
import './App.css';

function App() {
  return (
    <div className="App">
      <EmployeeAdd />
    </div>
  );
}

export default App;
