import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import TextWidget from '../../widget/text-widget';

type NavigationHeadingPropsTypes = {
    title:string
}
const NavigationHeading = (props:NavigationHeadingPropsTypes) => {
  return (
    <View style={styles.headingWrapper}>
        <TextWidget style={styles.headingText}>{props?.title}</TextWidget>
    </View>
  );
};

export default NavigationHeading;
