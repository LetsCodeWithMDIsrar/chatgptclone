import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { IMAGES } from '../../constants/IMAGES';

type SearchComponentTypes = {
    onNewChatPress:()=>void
}
const SearchComponent = (props:SearchComponentTypes) => {
  return (
    <View style={styles.container}>
        <View style={styles.searchWrapper}>
            <Image source={IMAGES.search_2Icon} style={styles.searchIcon}/>
            <TextInput placeholder="Search" style={styles.searchInput}/>
        </View>
        <TouchableOpacity onPress={props?.onNewChatPress} style={styles.pencilIconWrapper}>
            <Image source={IMAGES.pencilIcon} style={styles.pencilIcon}/>
        </TouchableOpacity>
    </View>
  );
};

export default SearchComponent;
