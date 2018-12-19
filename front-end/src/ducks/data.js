// /src/ducks/data.js

const LOAD_SELECTED_COLUMN = 'LOAD_SELECTED_COLUMN';
const LOAD_DATA = 'LOAD_DATA';
const LOAD_COLUMNS = 'LOAD_COLUMNS';
const SET_LOAD_FALSE = 'SET_LOAD_FALSE';

export const loadSelectedColumn = selectedColumn => (dispatch) => {
  dispatch({
    type: LOAD_SELECTED_COLUMN,
    payload: selectedColumn,
  });
};

export const loadData = selectedColumn => (dispatch) => {
  fetch(`/data/results/${selectedColumn.replace(/ /g, '_')}`)
    .then(res => res.json())
    .catch(e => console.log(e))
    .then((data) => {
      dispatch({
        type: LOAD_DATA,
        payload: { data, loaded: true },
      });
    });
};

export const loadColumns = () => (dispatch) => {
  fetch('/data/columns')
    .then(res => res.json())
    .catch(e => console.log(e))
    .then((columns) => {
      dispatch({
        type: LOAD_COLUMNS,
        payload: columns,
      });
    });
};

export const setLoadFalse = () => (dispatch) => {
  dispatch({
    type: SET_LOAD_FALSE,
    payload: false,
  });
};
