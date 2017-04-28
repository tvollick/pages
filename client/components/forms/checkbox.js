import React from 'react';

class Checkbox extends React.Component {

  toggleCheckboxChange () {
    const { handleCheckChange, value } = this.props;

    handleCheckChange(value);
  }

  render () {
    const { label, value, isChecked } = this.props;

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={this.toggleCheckboxChange.bind(this)}
          />
          {label}
        </label>
      </div>
    );
  }

}

export default Checkbox;
