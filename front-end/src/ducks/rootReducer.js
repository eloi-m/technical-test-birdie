
const initialState = {
	selectedColumn: "",
	data: [],
	columns: [],
	loaded: true
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
				data : action.payload.data,
				loaded : action.payload.loaded
			}
		case "LOAD_COLUMNS":
			return {
				...state,
				columns: action.payload
			}
		case "SET_LOAD_FALSE":
			return {
				...state,
				loaded: action.payload
			}
		default:
			return state;
	}
};

export default rootReducer;