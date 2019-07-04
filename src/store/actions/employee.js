import * as actionTypes from './actionTypes';

export const addEmployee = (values)=>{
	return {
		type: actionTypes.ADD_EMPLOYEE,
		value:values
	};
} 

export const removeEmployee = (values) =>{
	return {
		type: actionTypes.REMOVE_EMPLOYEE,
		resultElId:values
	};
}

export const updateEmployee = (values)=>{
	return{
		type: actionTypes.UPDATE_EMPLOYEE,
		value:values
	}
}

export const listEmployee = (values)=>{
	return{
		type: actionTypes.LIST_EMPLOYEE,
		value: values
	}
}