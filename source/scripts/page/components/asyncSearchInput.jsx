import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Async } from 'react-select';

class AsyncSearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null
    };

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(value) {
    this.props.submitForm(value);
  }

  renderOption(option) {
    return <span>{option.name} - {option.description}</span>;
  }

  renderValue(option) {
    return <span>{option.name} - {option.description}</span>;
  }

  render() {
    const { value } = this.state;
    const { getCities, disabled } = this.props;

    return (
      <div className="header__form">
        <Async
          disabled={disabled}
          onBlurResetsInput={false}
          onSelectResetsInput={false}
          placeholder="Выберите город"
          searchPromptText="Начните вводить для поиска"
          loadingPlaceholder="Загрузка..."
          value={value}
          valueKey="name"
          onChange={this.updateValue}
          loadOptions={getCities}
          optionRenderer={this.renderOption}
          valueRenderer={this.renderValue}
        />
      </div>
    );
  }
}

AsyncSearchInput.propTypes = {
  getCities: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default AsyncSearchInput;
