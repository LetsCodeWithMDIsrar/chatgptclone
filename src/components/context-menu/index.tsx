import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './styles';
import { contextMenu1MockData } from '../../constants/mock-data/contextmenu1mockdata';
import TextWidget from '../../widget/text-widget';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const ContextMenu = ({isToggle, customStyle}:{isToggle:boolean, customStyle:any}) => {
    const scale = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(()=>{
     return {
        transform:[{scale:scale.value}],
     };
    });

    useEffect(()=>{
        toggleBox();
    }, [isToggle]);


    const toggleBox = ()=>{
        if(!isToggle){
            scale.value = 0;
        }
        else{
            scale.value = withTiming(1, {
                duration:100,
                easing:Easing.ease,
            });
        }
    };

  return (
    <Animated.View style={[styles.container,animatedStyle, customStyle]}>
        <View style={[styles.box]}>
            {
                contextMenu1MockData?.map((item)=>{
                    return(
                        <View key={item.title} style={styles.itemWrapper}>
                            <Image source={item?.icon} style={styles.itemIcon}/>
                            <TextWidget style={styles.itemName}>{item?.title}</TextWidget>
                        </View>
                    );
                })
            }
        </View>
    </Animated.View>
  );
};

export default ContextMenu;
