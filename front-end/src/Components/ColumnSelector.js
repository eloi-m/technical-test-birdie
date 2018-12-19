import React from 'react';
import Select from 'react-select';

const BUTTON_STYLE = {
	width:"33%",
	zIndex:50
}


class ColumnSelector extends React.Component {
  state = {
    selectedOption: null,
  }

  createOptions = () => {
	const {columns = []} = this.props;
	const {config} = this.props;

	const options = columns.filter((e) => !config.filteredColumn.includes(e))

	return options.map((e) => {
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
					options={this.createOptions()}
				/>
			</div>
    );
	}
}

export default ColumnSelector;