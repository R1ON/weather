import React, { Component } from 'react';
import { Async } from 'react-select';

import { get } from '../../common/utils/lodash';

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

    const cityName = get(value, 'name', null);

    return (
      <div>
        <Async
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
        <button onClick={submitForm(cityName)} className="modal-footer-submit">Найти погоду</button>
      </div>
    );
  }
}

export default AsyncSearchInput;
