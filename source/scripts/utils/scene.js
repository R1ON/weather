import { isEmpty } from '../common/utils/lodash';

import {
  SECONDS_PER_DAY,
  SECONDS_PER_HOUR,
  SECONDS_PER_MINUTE,
  SEMICIRCLE_DEGREES
} from '../constants/settingsPage';

const convertTimeIntoPayload = (time) => {
  const hasTime = !isEmpty(time);

  // Вычисляем восход, закат и текущее время
  const sunrise = hasTime && (SECONDS_PER_HOUR * time.sunrise.hours) + (SECONDS_PER_MINUTE * time.sunrise.minutes);
  const sunset = hasTime && ((SECONDS_PER_HOUR * time.sunset.hours) + (SECONDS_PER_MINUTE * time.sunset.minutes));
  const currentTime = hasTime && ((SECONDS_PER_HOUR * time.hours) + (SECONDS_PER_MINUTE * time.minutes) + time.seconds);

  // Определяем ночь сейчас или день, в зависимости от этого показываем луну или солнце
  const isNight = (currentTime < sunrise || currentTime > sunset);

  // Определяем время солнцестояния и количество секунд за 1градус для луны и солнца
  const solarTime = sunset - sunrise;
  const secondsPerDegreeForSun = solarTime / SEMICIRCLE_DEGREES || 0;
  const secondsPerDegreesForMoon = solarTime && ((SECONDS_PER_DAY - solarTime) / SEMICIRCLE_DEGREES);

  // Определяем количество градусов у солнца, у луны оставляем 0
  let moonDegree = 0;
  const sunDegree = hasTime ? (
    (((SECONDS_PER_HOUR * time.hours) + (SECONDS_PER_MINUTE * time.minutes) + time.seconds) - sunrise) / secondsPerDegreeForSun
  ) : 0;

  // Лунное время до полночи
  if (hasTime && time.hours <= 23 && currentTime > sunset) {
    moonDegree = (currentTime - sunset) / secondsPerDegreesForMoon;
  }

  // Лунное время после полночи
  if (hasTime && currentTime < sunrise) {
    moonDegree = (currentTime + (SECONDS_PER_DAY - sunset)) / secondsPerDegreesForMoon;
  }

  return {
    hasTime,
    isNight,
    moonDegree,
    sunDegree
  };
};

export default convertTimeIntoPayload;
