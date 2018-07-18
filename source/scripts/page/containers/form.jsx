import React, { Component } from 'react';
import axios from 'axios';

import { URL_GEOCODE, FORMAT, LANGUAGE_DATA } from '../../constants/settingsAPI';

import AsyncSearchInput from '../components/asyncSearchInput';

class FormContainer extends Component {
  constructor(props) {
    super(props);

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
    return () => {
      if (value) {
        const { getWeatherDataByCity } = this.props;

        getWeatherDataByCity(value);
      }
    };
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

export default FormContainer;
