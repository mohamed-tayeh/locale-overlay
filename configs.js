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

  // List of all locales (column "639-1"): https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
  const language = 'en';
  const dateFormat = 'dd.MM.yyyy';
  // Formats:
  // d.M.yyyy - 6.3.2023
  // d.MM.yyyy - 6.03.2023
  // dd.MM.yyyy - 06.03.2023
  // dd MMM yyyy - 06 Mar 2023
  // dd MMMM yyyy - 06 March 2023
  // EEE dd MMM yyyy - Mon 06 March 2023
  // you can change the "." to any character

  const timeFormat = 'HH:mm';
  // Formats:
  // HH:mm - 16:37
  // HH:mm:ss - 16:37:46
  // hh:mm a - 4:37 PM
  // hh:mm - 4:37
  // hh:mm ZZZZ - 4:37 EST
  // you can change the ":" to any character

  // All possible tokens/symbols: https://github.com/moment/luxon/blob/master/docs/formatting.md#table-of-tokens

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
    locationImg,
    dateImg,
    timeImg,
    language,
    dateFormat,
    timeFormat,
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
