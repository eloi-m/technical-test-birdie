import React from 'react';
import Select from 'react-select';


const BUTTON_STYLE = {
	width:"33%",
	zIndex:50
}

/*
const columns = [
	{ value: 'age', label: 'Age' },
	{ value: 'industry code', label: 'Industry code ' },
	{ value: 'occupation code', label: 'Occupation code' },
	{ value: 'education', label: 'Education' },
	{ value: 'wage per hour', label: 'Wage per hour' },
	{ value: 'last education', label: 'Last eduction' },
	{ value: 'marital status', label: 'Marital status' },
	{ value: 'major industry code', label: 'Major industry code' },
	{ value: 'major occupation code', label: 'Major occupation code'},
	{ value: 'mace', label: 'Mace' },
	{ value: 'hispanice', label: 'Hispanice' },
	{ value: 'sex', label: 'Sex' },
	{ value: 'member of labor', label: 'Member of labor' },
	{ value: 'reason for unemployment', label: 'Reason of unemployment' },
	{ value: 'fulltime', label: 'Fulltime' },
	{ value: 'capital gain', label: 'Capital gain' },
	{ value: 'capital loss', label: 'Capital loss' },
	{ value: 'dividends', label: 'Dividends' },
	{ value: 'income tax liability', label: 'Income tax liability' },
	{ value: 'previous residence region', label: 'Previous residence region' },
	{ value: 'previous residence state', label: 'Previous residence state' },
	{ value: 'household-with-family', label: 'Household with family' },
	{ value: 'household-simple', label: 'Household simple' },
	{ value: 'weight', label: 'Weight' },
	{ value: 'msa-change', label: 'Msa change' },
	{ value: 'reg-change', label: 'Reg chance' },
	{ value: 'within-reg-change', label: 'Within reg-change' },
	{ value: 'lived-here', label: 'Lived here' },
	{ value: 'migration prev res in sunbelt', label: 'Migration prev res in sunbelt' },
	{ value: 'w', label: 'W' },
	{ value: 'family members under 118', label: 'Family members under 118' },
	{ value: 'father birth country', label: 'Father birth country' },
	{ value: 'mother birth country', label: 'Mother birth country' },
	{ value: 'birth country', label: 'Birth country' },
	{ value: 'citizenship', label: 'Citizenship' },
	{ value: 'own business or self employed', label: 'Own business or self employed' },
	{ value: 'fill questionnaire for veteran s admin', label: "Fill questionnaire for veteran's admin" },
	{ value: 'veterans benefits', label: 'Veterans benefits' },
	{ value: 'weeks worked in year', label: 'Weeks worked in a year' },
	{ value: 'year', label: 'Year' },
	{ value: 'salary range', label: 'Salary range' },
];
*/

class ColumnSelector extends React.Component {
  state = {
    selectedOption: null,
  }

  createColumns = () => {
	const columns = this.props.columns;
	return columns.map((e) => {
		return {
			value: e,
			label: e.replace(/^\w/, c => c.toUpperCase())
	}})
  }

  handleChange = (selectedOption) => {
		this.setState({ selectedOption });
		this.props.onChange(selectedOption.value);
  }
  render() {
    const { selectedOption } = this.state;

    return (
			<div style={BUTTON_STYLE}> 
				<Select
					value={selectedOption}
					onChange={this.handleChange}
					options={this.createColumns()}
				/>
			</div>
    );
	}
}

export default ColumnSelector;