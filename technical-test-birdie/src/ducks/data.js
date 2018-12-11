// /src/ducks/data.js

const LOAD_SELECTED_COLUMN = 'LOAD_SELECTED_COLUMN';
const LOAD_DATA = 'LOAD_DATA'



export const loadSelectedColumn = (selectedColumn) => (dispatch) => {
	dispatch({
		type: LOAD_SELECTED_COLUMN, 
		payload: selectedColumn
	});
};

export const loadData = (selectedColumn) => (dispatch) => {
	fetch('/data/results/' + selectedColumn)
	.then(res => res.json())
	.catch((e)=> console.log(e))
	.then(data => {
		dispatch({
			type: LOAD_DATA, 
			payload: data
		});
	});	
};

