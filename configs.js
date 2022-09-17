let configs = (function () {
  'use strict';

  // Settings - required

  // Change the media files by placing them under the
  const locationImg = './media/location.svg';
  const dateImg = './media/date.svg';
  const timeImg = './media/time.svg';

  const location = 'Toronto, Canada';
  // Timezone must be from this list: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  // Under "TZ database name" column in the table
  const timezone = 'America/Toronto';
  const secondOn = false; // `hh:mm:ss` or `hh:mm`

  const textMarginTop = '1px'; // used to ensure that the text is centered with images

  // Styling - required

  // Dimensions - remember to change these when changing the text and image sizes!
  const height = '131px';
  const width = '248px';

  // Location icon dimensions
  const locationHeight = '30px';
  const locationWidth = '24px';

  // Date icon dimensions
  const dateHeight = '24px';
  const dateWidth = '24px';

  // Time icon dimensions
  const timeHeight = '24px';
  const timeWidth = '24px';
  // If you would like the icons to be on top of each other or next to each other
  const direction = 'column'; // column or row

  // Font styling
  const fontColor = 'white';
  const fontSize = '24px';

  // From google fonts: https://fonts.google.com/
  const fontFamily = 'Poppins';

  // Background styling
  const backgroundColor = '#000000'; // hex only
  const backgroundOpacity = 0.5; // 0 to 1 (0 is transparent)
  const backgroundRoundness = '0px';

  // Please don't edit anything below this line
  const settings = {
    location,
    timezone,
    secondOn,
    locationImg,
    dateImg,
    timeImg,
  };

  const styles = {
    textMarginTop,
    height,
    width,
    locationHeight,
    locationWidth,
    dateHeight,
    dateWidth,
    timeHeight,
    timeWidth,
    direction,
    fontColor,
    fontSize,
    fontFamily,
    backgroundColor,
    backgroundOpacity,
    backgroundRoundness,
  };

  let module = {};

  module.settings = settings;
  module.styles = styles;

  return module;
})();
