import React from 'react';
import './Button.css';


const button = (props)=>{
	let btnClasses = ['Success', props.btnType].join(' ');
	return(
		<button className={btnClasses} onClick={props.clicked}>{props.children}</button>
	)
}

export default button;