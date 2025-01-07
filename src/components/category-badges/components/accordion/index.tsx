import { View, Text, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing } from 'react-native-reanimated';
import { categoryMockData } from '../../../../constants/mock-data/category-mock-data';
import CategoryBadge from '../category-badge';
import { styles } from './styles';

type AccordionType = {
    defaultCategory:boolean;
    onMorePress:()=>void
    children:React.ReactNode
}
const Accordion = (props:AccordionType) => {
    const animation = useSharedValue(0);

    useEffect(()=>{
        if(props?.defaultCategory){
            animation.value = 0;
        }else{
            animation.value = withTiming(300, {
                duration:300,
                easing:Easing.ease,
            });
        }
    }, [props?.defaultCategory]);

    const onMorePress = ()=>{
        props?.onMorePress();
    };

    const initialAnimatedStyle = useAnimatedStyle(()=>{
        return {
            display:animation.value ? 'none' : 'flex',
        };
    });

    const animatedStyle = useAnimatedStyle(()=>{
        return {
            height:animation.value,
            overflow:'hidden',
        };
    });
    
  return (
    <>
        <Animated.View style={[styles.initialBadgesWrapper, initialAnimatedStyle]}>
            {
                categoryMockData?.initial?.map((item, index)=>{
                    return <CategoryBadge onPress={()=>{}} key={index} name={item.name} icon={item.icon}/>;
                })
            }
            <CategoryBadge onPress={onMorePress} disableIcon name="More"/>
        </Animated.View>
        <Animated.View style={animatedStyle}>
            {props?.children}
        </Animated.View>
    </>
  );
};

export default Accordion;
