
const initialState = {
	selectedColumn: null,
	data: []
};


const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOAD_SELECTED_COLUMN":
			return {
				...state,
				selectedColumn: action.payload
			}
		case "LOAD_DATA":
			return {
				...state,
				data : action.payload
			}
		default:
			return state;
	}
};

export default rootReducer;