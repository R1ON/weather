import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Async } from 'react-select';
import { Icon } from 'react-fa';

class AsyncSearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null
    };

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(value) {
    this.setState({ value });
  }

  renderOption(option) {
    return (
      <span>{option.name} - {option.description}</span>
    );
  }

  renderValue(option) {
    return (
      <span>{option.name} {option.description}</span>
    );
  }

  render() {
    const { value } = this.state;
    const { getCities, submitForm } = this.props;

    return (
      <div className="header__form search-form">
        <Async
          onBlurResetsInput={false}
          className="search-form__input"
          placeholder="Выберите город"
          searchPromptText="Начинайте вводить для поиска"
          loadingPlaceholder="Загрузка..."
          value={value}
          valueKey="name"
          onChange={this.updateValue}
          loadOptions={getCities}
          optionRenderer={this.renderOption}
          valueRenderer={this.renderValue}
        />
        <Icon name="fas fa-search" onClick={submitForm(value)} className="search-form__button" />
      </div>
    );
  }
}

AsyncSearchInput.propTypes = {
  getCities: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired
};

export default AsyncSearchInput;
