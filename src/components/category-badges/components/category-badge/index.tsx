import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { IMAGES } from '../../../../constants/IMAGES';
import TextWidget from '../../../../widget/text-widget';

type CategoryBadgeType = {
    name:string;
    icon?:any;
    disableIcon?:boolean
    onPress:()=>void
}
const CategoryBadge = (props:CategoryBadgeType) => {
  return (
    <TouchableOpacity onPress={props?.onPress} activeOpacity={1} style={styles.wrapper}>
        {
            !props?.disableIcon ? <Image source={props?.icon} style={styles.icon}/> : null
        }
        <TextWidget type="SemiBold" style={styles.categoryName}>{props?.name}</TextWidget>
    </TouchableOpacity>
  );
};

export default CategoryBadge;
