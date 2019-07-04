import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState={
	results:[]
} 

const deleteResult=(state, action)=>{
	let updatedArray=state.results.filter(result=>result._id !== action.resultElId)
	return updateObject(state, {results: updatedArray})
}

const reducer = (state=initialState, action)=>{
	//console.log(action.value);
	switch(action.type){
		case actionTypes.LIST_EMPLOYEE:
			return {
				...state,
				results: action.value
			}
		case actionTypes.REMOVE_EMPLOYEE:
			return deleteResult(state, action)
		break;
	}
	return state;
}

export default reducer; 