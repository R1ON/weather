import React, { Component } from 'react';
import { Form, Field, reduxForm } from 'redux-form';

import CumtomInput from '../components/cumtomInput';
import validate from '../validation/searchWeatherForm';

class FormContainer extends Component {
  submitForm(e) {
    e.preventDefault();
    console.log('submit');
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.submitForm}>
          <Field name="inputSearchWeather" component={CumtomInput} type="input" placeholder="enter city" />

          <button className="modal-footer-submit" type="submit">Sign in</button>
        </Form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'formContainer', validate
})(FormContainer);
