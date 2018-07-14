import React, { Component } from 'react';
import { Form, Field, reduxForm } from 'redux-form';

import { get } from '../../common/utils/lodash';

import CustomInput from '../components/customInput';
import validate from '../validation/searchWeatherForm';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    const { getWeatherDataByCity, formContainer } = this.props;

    const hasInputData = get(formContainer, 'values', null);

    if (hasInputData) {
      getWeatherDataByCity(hasInputData.inputSearchWeather);
    }

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.submitForm}>
          <Field name="inputSearchWeather" component={CustomInput} type="input" placeholder="enter city" />

          <button className="modal-footer-submit">Найти погоду</button>
        </Form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'formContainer', validate
})(FormContainer);
