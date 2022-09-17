(function () {
  'use strict';

  const settings = configs.settings;

  /**
   * Updates the overlay with the settings on load
   */
  function updateValues() {
    updateImageNames();
    updateLocation();
    updateDateTime();
  }

  /**
   * Updates images src
   */
  function updateImageNames() {
    const locationImg = document.querySelector('#location .icon');
    const dateImg = document.querySelector('#date .icon');
    const timeImg = document.querySelector('#time .icon');

    locationImg.src = settings.locationImg;
    dateImg.src = settings.dateImg;
    timeImg.src = settings.timeImg;
  }

  /**
   * Updates location value text based on user input
   */
  function updateLocation() {
    const locationValue = document.querySelector('#location .value');
    locationValue.innerHTML = settings.location;
  }

  /**
   * Updates date and time based on timezone entered by the user
   */
  function updateDateTime() {
    const dateValue = document.querySelector('#date .value');
    const timeValue = document.querySelector('#time .value');

    const dateTimeObj = luxon.DateTime.now()
      .setZone(settings.timezone)
      .toObject();

    let { hour, minute, second, day, month, year } = dateTimeObj;

    hour = hour.toString();
    minute = minute.toString();
    second = second.toString();

    dateValue.innerHTML = day + '.' + month + '.' + year;

    if (hour.length === 1) hour = '0' + hour;
    if (minute.length === 1) minute = '0' + minute;
    if (second.length === 1) {
      second = '0' + second;
    }

    if (settings.secondOn) {
      timeValue.innerHTML = hour + ':' + minute + ':' + second;
    } else {
      timeValue.innerHTML = hour + ':' + minute;
    }

    setTimeout(updateDateTime, 1000);
  }

  window.addEventListener('load', updateValues);
})();
