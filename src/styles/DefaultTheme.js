/* @flow */

import {Colors, DefaultTheme} from 'react-native-paper';

export default {
  ...DefaultTheme,
  dark: false,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.blue700,
    accent: Colors.blue700,
    background: Colors.white,
    surface: Colors.white,
    error: '#B00020',
    text: Colors.black,
    // disabled: color(Colors.black)
    //   .alpha(0.26)
    //   .rgb()
    //   .string(),
    // placeholder: color(Colors.black)
    //   .alpha(0.54)
    //   .rgb()
    //   .string(),
    // backdrop: color(Colors.black)
    //   .alpha(0.5)
    //   .rgb()
    //   .string(),
    // notification: Colors.pinkA400,
  },
  animation: {
    scale: 1.0,
  },
};
