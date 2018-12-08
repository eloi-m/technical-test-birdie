
const initialState = {
	selectedColumn: null,
};


const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOAD_SELECTED_COLUMN":
			return {
				...state,
				selectedColumn: action.payload
			}
		default:
			return state;
	}
};

export default rootReducer;