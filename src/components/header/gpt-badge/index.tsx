import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { IMAGES } from '../../../constants/IMAGES';
import TextWidget from '../../../widget/text-widget';

const GptBadge = () => {
  return (
    <View style={styles.wrapper}>
        <TextWidget style={styles.badgeText}>Get Plus</TextWidget>
        <Image source={IMAGES.starIcon} style={styles.icon}/>
    </View>
  );
};

export default GptBadge;
