import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import CategoryBadge from './components/category-badge';
import { categoryMockData } from '../../constants/mock-data/category-mock-data';
import { styles } from './styles';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Accordion from './components/accordion';
type CategoryBadgesTypes = {
    defaultCategory:boolean;
    categoryAnimationFlag:boolean;
    onMorePress:()=>void
}
const CategoryBadges = (props:CategoryBadgesTypes) => {
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(50);

    useEffect(()=>{
        if(props?.defaultCategory){
            startAnimation();
        }
    }, [props?.defaultCategory]);

    useEffect(()=>{
        opacity.value = withTiming(0, {duration:300});
        startAnimation();
    }, [props?.categoryAnimationFlag]);

    const startAnimation = ()=>{
        translateY.value = 50;
        setTimeout(()=>{
            opacity.value = withTiming(1, {duration:200});
        }, 200);
        translateY.value = withTiming(0, {duration:200});
    };
    const animatedStyle = useAnimatedStyle(()=>{
        return {
            opacity:opacity.value,
            transform:[{translateY:translateY.value}],
        };
    });
  return (
    <Animated.View style={[styles.appContainer, animatedStyle]}>
        <Accordion defaultCategory={props?.defaultCategory} onMorePress={props?.onMorePress}>
            <View style={styles.initialBadgesWrapper}>
                {
                    categoryMockData?.all?.map((item)=>{
                        return  <CategoryBadge onPress={()=>{}} key={item.name} name={item.name} icon={item.icon}/>;
                    })
                }
            </View>
        </Accordion>
    </Animated.View>
  );
};

export default CategoryBadges;
