const ValidateSearchWeatherForm = (value) => {
  const error = {};

  if (Object.keys(value).length !== 0) {
    if (value.inputSearchWeather.length > 200) {
      error.inputSearchWeather = 'Название города не может превышать 200 символов';
    }
  }

  return error;
};

export default ValidateSearchWeatherForm;
