import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import TextWidget from '../../widget/text-widget';
import PromptInput from '../prompt-input';
import SearchComponent from '../search-component';
import NavigationHeading from '../navigation-heading';
import NavigationItem from '../navigation-item';
import { chatListMockData } from '../../constants/mock-data/chatlistmockdata';
import ContextMenu from '../context-menu';
import { CommonState } from '../../context/common-provider';
import MainHeader from '../header/main-header';
import CategoryBadges from '../category-badges';

const MainStructure = () => {
    // numbers, string, boolean, object
    const gestureHandlerWidth = useSharedValue(0);
    const {width} = Dimensions.get('screen');
    const {setNavigationContextMenuPosition, setIsNavigationContextMenuOpen, isNavigationContextMenuOpen, navigationContextMenuPosition} = CommonState();
    const [defaultCategory, setDefaultCategory] = useState(true);
    const [categoryAnimationFlag, setCategoryAnimationFlag] = useState(true);
    const openMenu = ()=>{
        gestureHandlerWidth.value = withTiming(width - 70);

        /**
         * 1) withSprint(1)
         * 2) withTiming(1)
         * 3) withDelay(500, func)
         */


    };
    const onNewChatPress = ()=>{
        gestureHandlerWidth.value = withTiming(0);
        setCategoryAnimationFlag(!categoryAnimationFlag);
        setDefaultCategory(true);
    };
    const mainAnimatedStyle = useAnimatedStyle(()=>{
        return {
            transform:[gestureHandlerWidth.value === 0 ? {translateX:withTiming(0)} : {translateX:gestureHandlerWidth.value}],
        };
    });

    const onGestureEvent = useAnimatedGestureHandler({
        onStart:(e, ctx)=>{
            ctx.startX = gestureHandlerWidth.value;
        },
        onActive:(e, ctx:any)=>{
            const value = ctx.startX + e.translationX;

            if(value <= width - 70 && value > 0){
                gestureHandlerWidth.value = value;
                ctx.value = value;
            }
        },
        onEnd:(e, ctx:any)=>{
            if(ctx.value > width - 200){
                gestureHandlerWidth.value = withTiming(width - 70, {duration:500});
            }

            if(e.translationX < 0){
                gestureHandlerWidth.value = withTiming(0, {duration:500});
            }

            if(ctx.value < width - 200){
                gestureHandlerWidth.value = withTiming(0, {duration:500});
            }
        },
    });

    const overlayAnimatedStyle = useAnimatedStyle(()=>{
        let value = Math.floor((gestureHandlerWidth.value / width) * 100) / 100;
        return {
            display:gestureHandlerWidth.value ? 'flex' : 'none',
            opacity:Math.min(value, 0.50),
        };
    });

    const onActivated = ()=>{
        gestureHandlerWidth.value = withTiming(0, {duration:300});
        hideNavigationContextMenu();
    };
    const contextMenuStyle = {
        top:navigationContextMenuPosition?.absoluteY,
        left:navigationContextMenuPosition?.absoluteX + 70,
    };
    const hideNavigationContextMenu = ()=>{
        setIsNavigationContextMenuOpen(false);
        setTimeout((()=>{
            setNavigationContextMenuPosition({...navigationContextMenuPosition, absoluteX:0, absoluteY:-500});
        }));
    };

    const onMorePress = ()=>{
        setDefaultCategory(!defaultCategory);
    };
  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.container, mainAnimatedStyle]}>
            <ContextMenu isToggle={isNavigationContextMenuOpen} customStyle={contextMenuStyle}/>
            <TapGestureHandler maxDelayMs={250} numberOfTaps={1} onActivated={hideNavigationContextMenu}>
                {/* navigation container */}
                    <Animated.View style={styles.navigationWrapper}>
                            {/* <TouchableOpacity onPress={closeMenu} style={styles.closeButton}>
                                <Text style={styles.btnText}>Close Menu</Text>
                            </TouchableOpacity> */}
                            <View style={styles.navigationContentWrapper}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <SearchComponent onNewChatPress={onNewChatPress}/>
                                <NavigationHeading title="GPTs"/>
                                <NavigationItem enableIcon title="Explore GPTs"/>
                                <NavigationHeading title="Chats"/>
                            <View>
                                {
                                    chatListMockData?.map((title, idx)=>{
                                        return <NavigationItem key={idx} title={title}/>;
                                    })
                                }
                            </View>
                            </ScrollView>
                            </View>
                    </Animated.View>
            </TapGestureHandler>
            {/* main container */}
                <TapGestureHandler maxDelayMs={250} numberOfTaps={1} onActivated={onActivated}>
                    <Animated.View style={styles.mainWrapper}>
                            <Animated.View style={[styles.mainWrapperOverlay, overlayAnimatedStyle]}/>
                            {/* <TouchableOpacity onPress={openMenu} style={styles.openBtn}>
                                <TextWidget style={styles.btnText}>Open Menu</TextWidget>
                            </TouchableOpacity> */}
                            <MainHeader
                                onMenuPress={openMenu}
                                onNewChatPress={()=>{}}
                                onRightMenuPress={()=>{}}
                            />
                            <View style={styles.categoryBadgesWrapper}>
                                <TextWidget type="SemiBold" style={styles.categoryBadgesTitle}>What can I help with?</TextWidget>
                                {/* render all categories */}
                                <CategoryBadges categoryAnimationFlag={categoryAnimationFlag} defaultCategory={defaultCategory} onMorePress={onMorePress}/>
                            </View>
                            <PromptInput/>
                    </Animated.View>
                </TapGestureHandler>
        </Animated.View>
    </PanGestureHandler>
  );
};

export default MainStructure;
