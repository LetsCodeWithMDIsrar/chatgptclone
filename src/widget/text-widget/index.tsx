import { Text } from 'react-native';
import React from 'react';
import { styles } from './style';

type TextWidgetPropsTypes = {
    children:React.ReactNode
    type?: 'Light' | 'Medium' | 'Regular' | 'SemiBold'
    style?:any
}
const TextWidget = (props:TextWidgetPropsTypes) => {
  const textStyle = {
    fontFamily:`Noto Sans JP ${props?.type}`,
  };
  return (
   <Text style={[styles.text, textStyle, props?.style]}>{props?.children}</Text>
  );
};

TextWidget.defaultProps = {
  type:'Medium',
};

export default TextWidget;
