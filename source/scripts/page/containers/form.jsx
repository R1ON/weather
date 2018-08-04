import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import { URL_GEOCODE, FORMAT, LANGUAGE_DATA } from '../../constants/settingsAPI';

import AsyncSearchInput from '../components/asyncSearchInput';

class FormContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      prevCity: null
    };

    this.submitForm = this.submitForm.bind(this);
    this.getCitiesByName = this.getCitiesByName.bind(this);
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

      this.setState({ prevCity: value.name });

      getWeatherDataByCity(value.name, value.metaDataProperty.GeocoderMetaData.Address.country_code);
    }
  }

  render() {
    return (
      <AsyncSearchInput
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
