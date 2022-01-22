import {Dimensions, PixelRatio} from 'react-native';

// Font family
const open_sans = 'OpenSans-Regular';
const open_sans_light = 'OpenSans-Light';
const open_sans_bold = 'OpenSans-Bold';
const open_sans_semibold = 'OpenSans-SemiBold';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scale = size => (width / guidelineBaseWidth) * size;
export const verticalScale = size => (height / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

// Export font size
export const sizes = {
  base: 14,
  h1: verticalScale(28),
  h2: verticalScale(24),
  h3: verticalScale(20),
  h4: verticalScale(15),
  h5: verticalScale(13),
  h6: verticalScale(11),
};

export default {
  regularOpen: {
    fontFamily: open_sans,
  },

  lightOpen: {
    fontFamily: open_sans_light,
  },

  boldOpen: {
    fontFamily: open_sans_bold,
  },

  semiBoldOpen: {
    fontFamily: open_sans_semibold,
  },
};
