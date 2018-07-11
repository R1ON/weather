import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from './form';
import { getWeatherDataAction } from '../actions/weatherAction';

class PageContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    this.props.getWeatherData();
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = ({ pageReducers: { getWeatherDataReducer }, form }) => {
  const { response } = getWeatherDataReducer;

  return { ...response, form };
};

const mapDispatchToProps = dispatch => ({
  getWeatherData: () => dispatch(getWeatherDataAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
