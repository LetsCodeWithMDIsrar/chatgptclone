import { View, Text, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { IMAGES } from '../../constants/IMAGES';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const PromptInput = () => {
    const {width} = Dimensions.get('screen');
    const [clicked, setClicked] = useState(false);
    const animation = useSharedValue(0);
    const animationZoomIn = useSharedValue(1);
    const IconSize = {
        height:25,
        width:25,
    };
    const micIconSize = {
        height:22,
        width:22,
    };
    const soundWaveIconSize = {
        height:45,
        width:45,
    };

    const onPlusPress = ()=>{
        animation.value = withTiming(0, {duration:200});
        animationZoomIn.value = withTiming(1, {duration:200});
        setClicked(false);
    };
    const onInputPress = ()=>{
        animation.value = withTiming(1, {duration:200});
        animationZoomIn.value = withTiming(0, {duration:200});
        setClicked(true);
    };

    const inputWidth = useAnimatedStyle(()=>{
        const inWidth = interpolate(
            animation.value,
            [0,1],
            [width * 0.51, width * 0.64]
        );

        return {
            width:inWidth,
        };
    });

    const leftInputContentStyle = useAnimatedStyle(()=>{
        return {
            transform:[{scale:animationZoomIn.value}],
        };
    });
  return (
    <View style={styles.container}>
        {/* Main Input content Container */}
        <View style={styles.mainInputContentWrapper}>
            {/* Let input content container */}
            <Animated.View style={[styles.leftInputContentWrapper, leftInputContentStyle]}>
                <Image source={IMAGES.cameraIcon} style={IconSize} resizeMode="contain"/>
                <Image source={IMAGES.galleryIcon} style={IconSize} resizeMode="contain"/>
                <Image source={IMAGES.folderIcon} style={IconSize} resizeMode="contain"/>
            </Animated.View>

            {
                clicked ? <TouchableOpacity activeOpacity={1} onPress={onPlusPress} style={styles.rightInputContentWrapper}>
                    <Image source={IMAGES.plusIcon} style={soundWaveIconSize} resizeMode="contain"/>
                </TouchableOpacity>
                : null
            }

            {/* Main input wrapper */}
            <Animated.View style={[styles.mainInputWrapper, inputWidth]}>
                <TextInput
                    placeholder="Message"
                    style={styles.mainInput}
                    onPress={onInputPress}
                />
                <Image source={IMAGES.micIcon} style={micIconSize} resizeMode="contain"/>
            </Animated.View>

            {/* Right Input Wrapper */}
            <View style={styles.rightInputContentWrapper}>
                <Image source={IMAGES.soundWaveIcon} style={soundWaveIconSize} resizeMode="contain"/>
            </View>

        </View>
    </View>
  );
};

export default PromptInput;
