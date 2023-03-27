(function () {
  'use strict';

  const settings = configs.settings;
  const dateFormat = settings.dateFormat;
  const timeFormat = settings.timeFormat;
  const dateValue = document.querySelector('#date .value');
  const timeValue = document.querySelector('#time .value');

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
    locationValue.textContent = settings.location;
  }

  /**
   * Updates date and time based on timezone entered by the user
   */
  function updateDateTime() {
    const dateTimeObj = luxon.DateTime.now()
      .setZone(settings.timezone)
      .setLocale(settings.language);
    dateValue.textContent = dateTimeObj.toFormat(dateFormat);
    timeValue.textContent = dateTimeObj.toFormat(timeFormat);
    setTimeout(updateDateTime, 1000);
  }

  window.addEventListener('load', updateValues);
})();
