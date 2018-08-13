import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import AsyncSearchInput from '../components/asyncSearchInput';

import { every } from '../../common/utils/lodash';

import { URL_GEOCODE, FORMAT, LANGUAGE_DATA } from '../../constants/settingsAPI';
import { SUCCESS_CODE, DISPATCH_DEFAULT_TIME } from '../../constants/settingsPage';
import { STATUS_SUCCESS } from '../../constants/status';

class FormContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      prevCity: null,
      disabled: false
    };

    this.submitForm = this.submitForm.bind(this);
    this.getCitiesByName = this.getCitiesByName.bind(this);
  }

  componentWillUpdate({ status, code }) {
    const allRequestsComplete = status.map(element => element === STATUS_SUCCESS);

    if (every(allRequestsComplete) || code !== SUCCESS_CODE) {
      setTimeout(() => this.setState({ disabled: false }), DISPATCH_DEFAULT_TIME);
    }
  }

  getCitiesByName(input) {
    if (!input) return Promise.resolve({ options: [] });

    const promise = axios.get(URL_GEOCODE, {
      params: {
        format: FORMAT,
        lang: LANGUAGE_DATA,
        geocode: input
      }
    });

    return promise
      .then(({ data }) => ({ options: data.response.GeoObjectCollection.featureMember.map(v => (v.GeoObject)) }));
  }

  submitForm(value) {
    const { prevCity } = this.state;

    if (value && prevCity !== value.name) {
      const { getWeatherDataByCity } = this.props;

      this.setState({ prevCity: value.name, disabled: true });

      getWeatherDataByCity(value.name, value.metaDataProperty.GeocoderMetaData.Address.country_code);
    }
  }

  render() {
    const { disabled } = this.state;

    return (
      <AsyncSearchInput
        disabled={disabled}
        submitForm={this.submitForm}
        getCities={this.getCitiesByName}
      />
    );
  }
}

FormContainer.propTypes = {
  getWeatherDataByCity: PropTypes.func.isRequired
};

export default FormContainer;
