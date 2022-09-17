(function () {
  'use strict';

  const styles = configs.styles;

  /**
   * Sets the custom variables in the css
   */
  function customStyles() {
    loadGoogleFont(styles.fontFamily);

    document.documentElement.style.setProperty('--height', styles.height);
    document.documentElement.style.setProperty('--width', styles.width);

    document.documentElement.style.setProperty(
      '--location-height',
      styles.locationHeight
    );
    document.documentElement.style.setProperty(
      '--location-width',
      styles.locationWidth
    );

    document.documentElement.style.setProperty(
      '--date-height',
      styles.dateHeight
    );
    document.documentElement.style.setProperty(
      '--date-width',
      styles.dateWidth
    );

    document.documentElement.style.setProperty(
      '--time-height',
      styles.timeHeight
    );
    document.documentElement.style.setProperty(
      '--time-width',
      styles.timeWidth
    );

    document.documentElement.style.setProperty('--direction', styles.direction);
    document.documentElement.style.setProperty(
      '--font-color',
      styles.fontColor
    );
    document.documentElement.style.setProperty('--font-size', styles.fontSize);
    document.documentElement.style.setProperty(
      '--font-family',
      styles.fontFamily
    );

    const { red, green, blue } = extractHexColors(styles.backgroundColor);

    document.documentElement.style.setProperty('--background-red', red);
    document.documentElement.style.setProperty('--background-green', green);
    document.documentElement.style.setProperty('--background-blue', blue);
    document.documentElement.style.setProperty(
      '--background-opacity',
      styles.backgroundOpacity
    );
    document.documentElement.style.setProperty(
      '--background-roundness',
      styles.backgroundRoundness
    );

    document.documentElement.style.setProperty(
      '--text-margin-top',
      styles.textMarginTop
    );
  }

  /**
   * Takes a hex string and extracts the hex code for each red, green and blue
   * @param {string} hexColor
   * @return {{ red: string, green: string, blue: string }}
   */
  function extractHexColors(hexColor) {
    let backgroundColor = hexColor.toString();
    if (backgroundColor.startsWith('#')) {
      backgroundColor = backgroundColor.slice(1);
    }

    let red = parseInt(backgroundColor.slice(0, 2), 16);
    let green = parseInt(backgroundColor.slice(2, 4), 16);
    let blue = parseInt(backgroundColor.slice(4, 6), 16);

    return {
      red,
      green,
      blue,
    };
  }

  /**
   * Dynamically loads a google font
   * @param {string} font
   */
  function loadGoogleFont(font) {
    WebFont.load({
      google: {
        families: [font],
      },
    });
  }

  window.addEventListener('load', customStyles);
})();
