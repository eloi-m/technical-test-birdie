// /src/ducks/data.js

const LOAD_SELECTED_COLUMN = 'LOAD_SELECTED_COLUMN';



export const loadSelectedColumn = (selectedColumn) => (dispatch) => {
    dispatch({
        type: LOAD_SELECTED_COLUMN, 
        payload: selectedColumn
    });
};
