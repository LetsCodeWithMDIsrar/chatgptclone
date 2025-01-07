import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { IMAGES } from '../../../constants/IMAGES';
import GptBadge from '../gpt-badge';

type MainHeaderTypes = {
    onMenuPress:()=>void
    onNewChatPress:()=>void
    onRightMenuPress:()=>void
}
const MainHeader = (props:MainHeaderTypes) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={props?.onMenuPress}>
            <Image source={IMAGES.menuIcon} style={styles.menuIcon}/>
        </TouchableOpacity>
        <View style={styles.gptBadge}>
           <GptBadge/>
        </View>
        <View style={styles.rightWrapper}>
            <TouchableOpacity onPress={props?.onNewChatPress}>
                <Image source={IMAGES.pencilIcon} style={styles.pencilIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={props?.onRightMenuPress} style={styles.threeDotIconWrapper}>
                <Image source={IMAGES.three_dotsIcon} style={styles.threeDotIcon}/>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default MainHeader;
