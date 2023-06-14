import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeigh = 812;

const horizontalScale = (size) => (width / guidelineBaseWidth)*size;
const verticalScale = (size) => (height / guidelineBaseHeigh)*size;

const moderateScale = (size, factor=0.5) => size + (horizontalScale(size) - size)*factor;

export {horizontalScale, verticalScale, moderateScale};
