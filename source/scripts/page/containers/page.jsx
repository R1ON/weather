import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getWeatherDataAction } from '../actions/weatherAction';

class PageContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    this.props.getWeatherData();
  }

  render() {
    console.log(this.props)
    return (
      <div>
        test
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { response } = state.pageReducers.getWeatherDataReducer;

  return { ...response };
};

const mapDispatchToProps = dispatch => ({
  getWeatherData: () => dispatch(getWeatherDataAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
