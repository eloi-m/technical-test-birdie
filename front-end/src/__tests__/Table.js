import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../Components/Table/Table';

const MOCK_DATA = [
  {
    "education": "High school graduate",
    "count": 42809,
    "averageAge": 45.0525
  },
  {
    "education": "Children",
    "count": 41904,
    "averageAge": 6.981
  },
  {
    "education": "Some college but no degree",
    "count": 24624,
    "averageAge": 40.0483
  },
  {
    "education": "Bachelors degree(BA AB BS)",
    "count": 17593,
    "averageAge": 41.9513
  },
  {
    "education": "7th and 8th grade",
    "count": 7080,
    "averageAge": 52.0922
  },
  {
    "education": "10th grade",
    "count": 6672,
    "averageAge": 38.4441
  },
  {
    "education": "11th grade",
    "count": 6114,
    "averageAge": 35.4045
  },
  {
    "education": "Masters degree(MA MS MEng MEd MSW MBA)",
    "count": 5796,
    "averageAge": 46.4917
  },
  {
    "education": "9th grade",
    "count": 5436,
    "averageAge": 35.1508
  },
  {
    "education": "Associates degree-occup /vocational",
    "count": 4778,
    "averageAge": 41.8194
  },
  {
    "education": "Associates degree-academic program",
    "count": 3841,
    "averageAge": 40.9862
  },
  {
    "education": "5th or 6th grade",
    "count": 2915,
    "averageAge": 52.5242
  },
  {
    "education": "12th grade no diploma",
    "count": 1884,
    "averageAge": 37.9427
  },
  {
    "education": "1st 2nd 3rd or 4th grade",
    "count": 1575,
    "averageAge": 56.6997
  },
  {
    "education": "Prof school degree (MD DDS DVM LLB JD)",
    "count": 1562,
    "averageAge": 46.9731
  },
  {
    "education": "Doctorate degree(PhD EdD)",
    "count": 1084,
    "averageAge": 49.7528
  },
  {
    "education": "Less than 1st grade",
    "count": 724,
    "averageAge": 54.2831
  }
]
const MOCK_SELECTED_COLUMN = "education";
const MOCK_CONFIG = {
  numberOfDisplayedRows: 100,
  invitationToSelectColumn : 'Please select a column',
  filteredColumn: ['age']
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Table
            data={MOCK_DATA}
            selectedColumn={MOCK_SELECTED_COLUMN}
            config = {MOCK_CONFIG}
        />
    , div);
});


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Table
            data={undefined}
            selectedColumn={undefined}
            config = {MOCK_CONFIG}
        />
    , div);
});