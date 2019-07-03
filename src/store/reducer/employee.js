import * as actionTypes from '../actions/actionTypes';
//import { updateObject } from '../utility';
const initialState={
	results:[]
} 

const reducer = (state=initialState, action)=>{
	//console.log(action.value);
	switch(action.type){
		case actionTypes.LIST_EMPLOYEE:
			return {
				...state,
				results: state.results.concat(action.value)
			}
	}
	return state;
}

export default reducer;